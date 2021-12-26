import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { ApiHandler } from '../../../lib/type/handler'
import withSession from '../../../lib/middleware/session'

const Name: ApiHandler<{}, {}> = (req, res) => {
  const userName = req.session.get('user').displayName
  const images = req.session.get('user').profileImage
  res.status(200).json({ userName, images })
}

export default withSession(Name)
