import React from 'react'
import { Navbar } from "@/src/components/Navbar"
import { Footer } from '@/src/components/Footer'

export default function Layout({
  children,
}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>      
      <Footer />
    </>
  )
}
