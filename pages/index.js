

import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { AboutSection } from "@/src/components/AboutSection";
import { Testimonials } from "@/src/components/Testimonials";
import { Expectation } from "@/src/components/Expectation.jsx";
import { Contact } from "@/src/components/Contact";
import { useEffect , useState} from 'react';
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
        <Testimonials />
      <Contact />     
      
    </>
  );
}
