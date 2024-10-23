import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/Contact'
import Features from '@/components/Features'
import HomeUi from '@/components/HomeUi'
import React from 'react'

export default function page() {
  return (
    <div>
      <HomeUi/>
      <Features/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}
