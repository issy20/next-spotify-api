import axios from 'axios'
import useSWR from 'swr'
import { CurrentPlayingTrackType } from '../type/playingDataType'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const usePlayingTrack = () => {
  const { data, error } = useSWR<CurrentPlayingTrackType[], Error>(
    '/api/track/playing',
    fetcher
  )
  return { playingData: data, isLoading: !error && !data, isError: error }
}

export default usePlayingTrack
