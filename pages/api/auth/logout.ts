import withSession from '../../../lib/middleware/session'
import { ApiHandler } from '../../../lib/type/handler'

const logout: ApiHandler<{}, {}> = async (req, res) => {
  try {
    await req.session.destroy()
    res.status(200).redirect('/')
    res.end
  } catch (e: unknown) {
    res.status(500)
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
}

export default withSession(logout)
