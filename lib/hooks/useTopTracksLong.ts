import axios from 'axios'
import useSWR from 'swr'
import { TopTracksType } from '../type/topTracksType'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const useTopTracksLong = () => {
  const { data, error } = useSWR<TopTracksType[], Error>(
    '/api/track/topTracksLong',
    fetcher
  )
  return { topData: data, isLoading: !error && !data, isError: error }
}

export default useTopTracksLong
