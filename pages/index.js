
import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { AboutSection } from "@/src/components/AboutSection";
import { Testimonials } from "@/src/components/Testimonials";
import { Expectation } from "@/src/components/Expectation.jsx";
import { Form } from "@/src/components/Form";
import Demo from "@/src/components/SelectItem";

export default function Home() {
  return (
        
    <>
      
     
      <Navbar />
      <Header />
      <AboutSection />
      <Expectation/>
      <Testimonials />
      <Form />
      
  </>
    

 
    
  )
}
