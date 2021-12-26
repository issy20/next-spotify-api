import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { MediumTerm } from '../../components/MediumTerm'

const HalfYear = () => {
  return (
    <Layout>
      <p className=" text-lg mb-6">Top 5 tracks in half year</p>
      <MediumTerm />
      <Link href="/home" passHref>
        <a className="mt-5">Back to Home</a>
      </Link>
    </Layout>
  )
}

export default HalfYear
