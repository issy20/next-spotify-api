import axios from 'axios'
import { TopTracksType } from '../type/topTracksType'

export const getTopTracksByUser = async (
  accessToken: string,
  time_range: string
) => {
  const topTracksResponse = await axios.get<TopTracksType>(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=5`,
    {
      headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  )
  return topTracksResponse.data
}
