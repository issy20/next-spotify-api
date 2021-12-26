import axios from 'axios'
import useSWR from 'swr'
import { TopTracksItem, TopTracksType } from '../type/topTracksType'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const useTopTracksMedium = () => {
  const { data, error } = useSWR<TopTracksType[], Error>(
    '/api/track/topTracksMedium',
    fetcher
  )
  return { topData: data, isLoading: !error && !data, isError: error }
}

export default useTopTracksMedium
