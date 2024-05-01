import React, { useEffect, useState } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoArrowUp } from "react-icons/go";
import Aos from 'aos'
import ScrollToTopArrow from './components/ScrollToTopArrow';



const App = () => {

  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    Aos.init({ duration: 1000, easing: "ease-in-sine" })
  }, [])


  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    }
    else {
      setIsScrolled(false)
    }
  })

  window.removeEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    }
    else {
      setIsScrolled(false)
    }
  })







  return (
    <div className='bg-lightteriaryColor dark:bg-mainbg min-h-screen w-screen'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>

      {isScrolled && 
     <ScrollToTopArrow arrowProps = {<GoArrowUp/>}/>
      }

    


    </div>
  )
}

export default App
