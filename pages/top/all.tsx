import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { LongTerm } from '../../components/LongTerm'

const HalfYear = () => {
  return (
    <Layout>
      <p className="text-lg mb-6">Top 5 tracks of whole period</p>
      <LongTerm />
      <Link href="/home" passHref>
        <a className="mt-5">Back to Home</a>
      </Link>
    </Layout>
  )
}

export default HalfYear
