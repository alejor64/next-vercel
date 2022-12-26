import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1>
        Ir al <Link href="/">home</Link>
      </h1>
    </MainLayout>
  )
}
