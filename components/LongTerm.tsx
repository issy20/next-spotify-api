import Link from 'next/link'
import useTopTracksLong from '../lib/hooks/useTopTracksLong'
import { TermLayout } from './TermLayout'

export const LongTerm = () => {
  const { topData, isError, isLoading } = useTopTracksLong()
  if (isLoading) return <div>Loading</div>
  if (isError) return <Link href="/">You&apos;ll need to log in again.</Link>
  return <TermLayout topData={topData!} />
}
