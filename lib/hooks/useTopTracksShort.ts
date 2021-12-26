import axios from 'axios'
import useSWR from 'swr'
import { TopTracksType } from '../type/topTracksType'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const useTopTracksShort = () => {
  const { data, error } = useSWR<TopTracksType[], Error>(
    '/api/track/topTracksShort',
    fetcher
  )
  return { topData: data, isLoading: !error && !data, isError: error }
}

export default useTopTracksShort
