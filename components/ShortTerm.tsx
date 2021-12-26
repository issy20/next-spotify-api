import Link from 'next/link'
import useTopTracksShort from '../lib/hooks/useTopTracksShort'
import { TermLayout } from './TermLayout'

export const ShortTerm = () => {
  const { topData, isError, isLoading } = useTopTracksShort()
  if (isLoading) return <div>Loading</div>
  if (isError) return <Link href="/">You&apos;ll need to log in again.</Link>
  return <TermLayout topData={topData!} />
}
