import Link from 'next/link'
import useTopTracksMedium from '../lib/hooks/useTopTracksMedium'
import { TermLayout } from './TermLayout'

export const MediumTerm = () => {
  const { topData, isError, isLoading } = useTopTracksMedium()

  if (isLoading) return <div>Loading</div>
  if (isError) return <Link href="/">You&apos;ll need to log in again.</Link>
  return <TermLayout topData={topData!} />
}
