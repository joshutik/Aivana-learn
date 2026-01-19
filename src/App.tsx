import Navbar from './Components/Navbar/Navbar.js';
import './App.css'
import Hero from './Components/Hero/Hero.js';
import Challengepage from './Components/Challenge/Challengepage.js';
import Features from './Components/Features/Features.js';
import Exam from './Components/Exam/Exam.js';
import Testimonials from './Components/Testimonials/Testimonials.js';
import Pricing from './Components/Pricing/Pricing.js';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Challengepage />
      <Features/>
      <Exam/>
      <Testimonials/>
      <Pricing/>
    </>
  )
}

export default App
