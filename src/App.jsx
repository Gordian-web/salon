import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { HeroPage } from './components/heropage'
import { PreMium } from './components/premium'
import CoNtact from './components/contact'
import Appointment from './components/appointment'
import Details from './components/details'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notfound } from "./components/notfound";
import Pricing from './components/pricing'
import Team from './components/team'
import Footer from './components/footer'
import Gallery from './components/Gallery'
import BackToTop from './components/backtop'




function App() {
  return (
    <BrowserRouter>
      <BackToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroPage />
              <PreMium />
              <CoNtact />
              <Pricing />
              <Team />
              <Gallery />
            </>
          }
        />
        <Route path="/detail"   element={<Details />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<CoNtact />} />
        <Route path="/premium" element={<PreMium />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
