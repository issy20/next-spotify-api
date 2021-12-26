import axios from 'axios'
import withSession from '../../../lib/middleware/session'
import { ApiHandler } from '../../../lib/type/handler'
import { LastPlayedTrackType } from '../../../lib/type/playedDataType'

const getLastPlayedTrack = async (accessToken: string) => {
  const lastPlayedTrackResponse = await axios.get<LastPlayedTrackType>(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  )
  return lastPlayedTrackResponse.data
}

const lastPlayedTrack: ApiHandler<{}, {}> = async (req, res) => {
  const accessToken = req.session.get('user').accessToken
  const playedTrack = await Promise.all([getLastPlayedTrack(accessToken)])
  res.status(200).json(playedTrack)
}

export default withSession(lastPlayedTrack)
