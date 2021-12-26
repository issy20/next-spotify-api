import { getTopTracksByUser } from '../../../lib/hooks/getTopTracks'
import withSession from '../../../lib/middleware/session'
import { ApiHandler } from '../../../lib/type/handler'

const topTracksShort: ApiHandler<{}, {}> = async (req, res) => {
  const time_range = 'short_term'
  const accessToken = req.session.get('user').accessToken
  const track = await Promise.all([getTopTracksByUser(accessToken, time_range)])
  res.status(200).json(track)
}

export default withSession(topTracksShort)
