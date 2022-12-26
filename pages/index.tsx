import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home</h1>
        <h1>
          Ir al <Link href="/about">about</Link>
        </h1>
      </MainLayout>
    </>
  )
}
