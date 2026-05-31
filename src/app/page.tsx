import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ClientsBar from '@/components/ClientsBar'
import Services from '@/components/Services'
import WhyChooseMe from '@/components/WhyChooseMe'
import Story from '@/components/Story'
import Work from '@/components/Work'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientsBar />
        <Services />
        <WhyChooseMe />
        <Story />
        <Work />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
