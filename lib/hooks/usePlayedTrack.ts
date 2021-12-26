import axios from 'axios'
import useSWR from 'swr'
import { LastPlayedTrackType } from '../type/playedDataType'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const usePlayedTrack = () => {
  const { data, error } = useSWR<LastPlayedTrackType[], Error>(
    '/api/track/played',
    fetcher
  )
  return { playedData: data, isLoading: !error && !data, isError: error }
}

export default usePlayedTrack
