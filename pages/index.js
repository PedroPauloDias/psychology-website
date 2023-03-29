

import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { AboutSection } from "@/src/components/AboutSection";
import { Expectation } from "@/src/components/Expectation.jsx";
import { Contact } from "@/src/components/Contact";
import { Recommended } from "../src/components/recommended"
import { useEffect } from 'react';
import { WhatsApp } from "@/src/components/whatsapp";
import {Analytics} from 'src/components/analytics'

import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Home() {
   
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])





  return (
    <>          
      <Navbar />
        <Header />
        <AboutSection />
      <Expectation />
      <Recommended/>
      <Contact />     
      <WhatsApp/>
    </>
  );
}
