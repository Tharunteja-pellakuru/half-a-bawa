import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import Projects from './components/Projects/Projects'
import Leadership from './components/Leadership/Leadership'
import Insights from './components/Insights/Insights'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Projects />
      <Leadership />
      <Insights />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
