

import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { AboutSection } from "@/src/components/AboutSection";
import { Testimonials } from "@/src/components/Testimonials";
import { Expectation } from "@/src/components/Expectation.jsx";
import { Contact } from "@/src/components/Contact";

export default function Home() {



    
  
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
