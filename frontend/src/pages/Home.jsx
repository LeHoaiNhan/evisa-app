import { useRef } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Stats from '../../components/Stats'
import ApplicationForm from '../../components/ApplicationForm'
import Features from '../../components/Features'
import Footer from '../../components/Footer'

export default function Home() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar onApplyClick={scrollToForm} />
      <Hero onApplyClick={scrollToForm} />
      <Stats />
      <div ref={formRef}>
        <ApplicationForm />
      </div>
      <Features />
      <Footer />
    </>
  )
}
