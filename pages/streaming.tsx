import { NextPage } from 'next'
import Image from 'next/image'

import { Layout } from '../components/Layout'
import usePlayedTrack from '../lib/hooks/usePlayedTrack'
import usePlayingTrack from '../lib/hooks/usePlayingTrack'

import Link from 'next/link'

const Streaming: NextPage = () => {
  const { playingData, isLoading, isError } = usePlayingTrack()
  const { playedData } = usePlayedTrack()
  const _playingData = playingData && playingData![0]
  const _playedData = playedData && playedData![0].items[0]

  if (isLoading)
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    )
  if (isError)
    return (
      <Layout>
        <Link href="/">You&apos;ll need to log in again.</Link>
      </Layout>
    )

  return (
    <Layout>
      <div className=" bg-white shadow-2xl text-center rounded text-xs py-16 px-8 md:w-96">
        {_playingData?.is_playing && (
          <>
            <p className="font-semibold">Now Playing</p>
            <br />
            <a href={_playingData.item.uri}>
              <Image
                src={_playingData.item.album.images[2].url}
                width={_playingData.item.album.images[2].width}
                height={_playingData.item.album.images[2].height}
                alt="jacket"
              />
            </a>

            <p className="mt-2">{_playingData.item.artists[0].name}</p>
            <p>{_playingData.item.name}</p>
            <br />
            <br />
            <Link href="/home">Back to Home</Link>
          </>
        )}
        {!_playingData?.is_playing && _playedData?.track.id && (
          <>
            <p className="mt-2 font-semibold">Last Played</p>
            <br />
            <a href={_playedData.track.uri}>
              <Image
                src={_playedData.track.album.images[2].url}
                width={_playedData.track.album.images[2].width}
                height={_playedData.track.album.images[2].height}
                alt="jacket"
              />
            </a>
            <br />
            <p className="mt-2">
              {_playedData.track.artists.map((artist) => artist.name)}
            </p>
            <p>{_playedData.track.name}</p>
            <br />
            <p>{_playedData.played_at}</p>
            <br />
            <br />

            <Link href="/home">Back to Home</Link>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Streaming
