'use client'

import React from 'react'
import TeamSection from '../components/team-section'
import EcopawScamSection from '../components/scam-section'
import BuySection from '../components/buy-section'
import EcopawSection from '../components/cammo-section'
import BackgroundSection from '../components/background-section'
import MainSection from '../components/main_section'
import PreBooking from '../components/pre-booking'
//import PageLoadModal from '../components/page-load-modal'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <MainSection />
      <EcopawSection />
      <BuySection />
      <BackgroundSection />
      <EcopawScamSection />
      <PreBooking />
      {/*       <PageLoadModal /> */}
    </main>
  )
}
