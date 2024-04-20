'use client'

import React from 'react'
import EcopawSection from '../components/ecopaw-section'
import BuySection from '../components/buy-section'
import DescriptionSection from '../components/description-section'
import BackgroundSection from '../components/background-section'
import MainSection from '../components/main_section'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <MainSection />
      <DescriptionSection />
      <BuySection />
      <BackgroundSection />
      <EcopawSection />
    </main>
  )
}
