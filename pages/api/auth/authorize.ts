import axios from 'axios'
import { CookieSerializeOptions, serialize } from 'cookie'
import moment from 'moment'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApiHandler } from '../../../lib/type/handler'
import withSession from '../../../lib/middleware/session'
import { Image } from '../../../lib/type/userInfo'

type SpotifyAuthApiResponse = {
  access_token: string
  token_type: string
  scope: string
  expires_in: number
  refresh_token: string
}

type SpotifyUserResponse = {
  country: string
  display_name: string
  id: string
  images: Image[]
}

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  const options: CookieSerializeOptions = {
    httpOnly: true,
    secure: true,
    path: '/',
  }
  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

const authorize: ApiHandler<{}, {}> = async (req, res) => {
  const { code, state } = req.query

  const params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('code', code as string)
  params.append(
    'redirect_uri',
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/auth/authorize`
  )

  const response = await axios.post<SpotifyAuthApiResponse>(
    'https://accounts.spotify.com/api/token',
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //prettier-ignore
        'Authorization': `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
          'utf-8'
        ).toString('base64')}`,
      },
    }
  )

  const userResponse = await axios.get<SpotifyUserResponse>(
    `https://api.spotify.com/v1/me`,
    {
      headers: {
        Authorization: `Bearer ${response.data.access_token}`,
      },
    }
  )
  req.session.set('user', {
    userId: userResponse.data.id,
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
    authedTs: moment().format('YYYY-MM-DD HH:mm:ss'),
    expiresIn: response.data.expires_in,
    displayName: userResponse.data.display_name,
    profileImage: userResponse.data.images,
  })
  await req.session.save()
  res.status(200).redirect('/home')
}

export default withSession(authorize)
