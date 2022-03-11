import { withIronSession } from 'next-iron-session'
import { ApiHandler } from '../type/handler'

const withSession = (handler: ApiHandler<{}, {}>) => {
  return withIronSession(handler, {
    cookieName: 'app_session',
    password: `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  })
}

export default withSession
