import axios from 'axios'
import withSession from '../../../lib/middleware/session'
import { ApiHandler } from '../../../lib/type/handler'
import { LastPlayedTrackType } from '../../../lib/type/playedDataType'

const getPlaybackState = async (accessToken: string) => {
  const playbacksStateResponse = await axios.get(
    'https://api.spotify.com/v1/me/player',
    {
      headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  )
  return playbacksStateResponse.data
}

const playbackState: ApiHandler<{}, {}> = async (req, res) => {
  const accessToken = req.session.get('user').accessToken
  const state = await Promise.all([getPlaybackState(accessToken)])
  res.status(200).json(state)
}

export default withSession(playbackState)
