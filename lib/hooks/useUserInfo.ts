import axios from 'axios'
import useSWR from 'swr'
import { userInfo } from '../type/userInfo'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)
const useUserInfo = () => {
  const { data, error } = useSWR<userInfo, Error>('/api/track/name', fetcher)
  return { user: data, isLoading: !error && !data, isError: error }
}

export default useUserInfo
