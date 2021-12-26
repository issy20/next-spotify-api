import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import useUserInfo from '../lib/hooks/useUserInfo'

const Hello = () => {
  const { user } = useUserInfo()

  return (
    <Layout>
      <div className=" bg-white shadow-2xl text-center rounded p-8 md:w-96">
        {user?.images && (
          <div className="flex justify-center mt-5">
            <Image
              src={user.images[0].url}
              alt="profile"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        )}
        <div className="mt-8">
          <p className="font-bold">Name</p>
          <p className="text-xs mt-2">{user?.userName}</p>
          <p className="font-bold mt-7">Menu</p>
          <Link href="/streaming">
            <a className="text-xs mt-2 text-gray-600 hover:bg-gray-200">
              Now Streaming / Last Streamed
            </a>
          </Link>
          <br />
          <Link href="/top/three-months">
            <a className="text-xs mt-2 text-gray-600  hover:bg-gray-200">
              Top 5 tracks for 3 months
            </a>
          </Link>
          <br />
          <Link href="/top/half-year">
            <a className="text-xs mt-2 text-gray-600  hover:bg-gray-200">
              Top 5 tracks in Half Year
            </a>
          </Link>
          <br />
          <Link href="/top/all">
            <a className="text-xs mt-2 text-gray-600  hover:bg-gray-200">
              Top 5 tracks for the whole period
            </a>
          </Link>
          <form action="/api/auth/logout" method="GET" className="mt-5">
            <button
              type="submit"
              role="link"
              className="text-xs hover:bg-gray-200"
            >
              Logout
            </button>
          </form>
        </div>
      </div>

      {/* <Link href="/api/track/name">
        <a>info</a>
      </Link> */}
    </Layout>
  )
}

export default Hello
