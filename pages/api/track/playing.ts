import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApiHandler } from '../../../lib/type/handler'
import withSession from '../../../lib/middleware/session'
import { CurrentPlayingTrackType } from '../../../lib/type/playingDataType'

const getCurrentlyPlayingTrack = async (accessToken: string) => {
  const currentlyPlayingTrackResponse =
    await axios.get<CurrentPlayingTrackType>(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Content-Type': 'application/json',
          //prettier-ignore
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    )
  return currentlyPlayingTrackResponse.data
}

const currentlyPlayingTrack: ApiHandler<{}, {}> = async (req, res) => {
  const accessToken = req.session.get('user').accessToken
  const playingTrack = await Promise.all([
    getCurrentlyPlayingTrack(accessToken),
  ])
  res.status(200).json(playingTrack)
}

export default withSession(currentlyPlayingTrack)
