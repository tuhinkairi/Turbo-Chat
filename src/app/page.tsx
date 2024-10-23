import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/Contact'
import Features from '@/components/Features'
import HomeUi from '@/components/HomeUi'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
       <header className="fixed z-50 top-0 w-full">
          <Navbar/>
        </header>
      <HomeUi/>
      <Features/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}
