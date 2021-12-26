import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { ShortTerm } from '../../components/ShortTerm'

const ThreeMonths = () => {
  return (
    <Layout>
      <p className="text-lg mb-6">Top 5 for 3 months</p>
      <ShortTerm />
      <Link href="/home" passHref>
        <a className="mt-5">Back to Home</a>
      </Link>
    </Layout>
  )
}

export default ThreeMonths
