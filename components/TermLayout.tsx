import Image from 'next/image'
import Link from 'next/link'
import { VFC } from 'react'
import { TopTracksType } from '../lib/type/topTracksType'

interface Props {
  topData: TopTracksType[]
}

export const TermLayout: VFC<Props> = ({ topData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-compact">
        <thead>
          <tr className="rounded-none">
            <th></th>
            <th>artist</th>
            <th>track</th>
            <th className="hidden md:block">album</th>
          </tr>
        </thead>
        <tbody>
          {topData?.map((data) =>
            data.items?.map((item, i) => (
              <tr key={i}>
                <td>
                  <div>
                    <Image
                      src={item.album.images[2].url}
                      alt="ジャケット写真"
                      width={item.album.images[2].width}
                      height={item.album.images[2].height}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    {item.artists.map((artist, j) => (
                      <p className="text-xs" key={j}>
                        {artist.name}
                      </p>
                    ))}
                  </div>
                </td>
                <td>
                  <div>
                    <p className="text-xs">{item.name}</p>
                    <p className="text-xs text-gray-500 md:hidden">
                      {item.album.name}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="hidden text-xs md:inline-block">
                      {item.album.name}
                    </p>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
