
import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { AboutSection } from "@/src/components/AboutSection";
import { Testimonials } from "@/src/components/Testimonials";
import { Expectation } from "@/src/components/Expectation.jsx";
import { Form } from "@/src/components/Form";

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
