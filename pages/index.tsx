import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useCallback } from 'react'
import { Layout } from '../components/Layout'

const Home: NextPage = ({
  loginPath,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const login = useCallback(() => {
    window.location.href = loginPath
    console.log(loginPath)
  }, [loginPath])
  return (
    <Layout>
      <button onClick={login} className="hover:bg-gray-200">
        Login with Spotify
      </button>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const params = new URLSearchParams()
  params.append('client_id', process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '')
  params.append('response_type', 'code')
  params.append(
    'redirect_uri',
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/auth/authorize` || ''
  )
  params.append(
    'scope',
    'user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read'
  )
  params.append('state', 'state')
  return {
    props: {
      loginPath: `https://accounts.spotify.com/authorize?${params.toString()}`,
    },
  }
}
