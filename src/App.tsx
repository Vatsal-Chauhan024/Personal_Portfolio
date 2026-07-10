import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import SplashScreen from "./common/SplashScreen/SplashScreen"
import { Header } from "./components"
import { InsideLayout, Layout } from "./layouts"
import About from "./sections/About"
import Contact from "./sections/Contact"
import HeroSection from "./sections/HeroSection"
import Projects from "./sections/projects/Projects"
import Services from "./sections/Services"
import Skills from "./sections/Skills"

const App = () => {
  const [startAnimation, setStartAnimation] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    window.scrollTo({
      behavior: "instant" as ScrollBehavior,
      left: 0,
      top: 0
    })
  }, [])
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflowY = "hidden"
      document.body.style.overflowX = "visible"
    } else {
      document.body.style.overflowY = "auto"
      document.body.style.overflowX = "hidden"
    }

    return () => {
      document.body.style.overflowY = "auto"
      document.body.style.overflowX = "hidden"
    }
  }, [showSplash])
  return (
    <BrowserRouter>
      <ToastContainer
        autoClose={5000}
        closeOnClick={false}
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="light"
      />
      <Routes>
        <Route
          element={
            <>
              {showSplash && (
                <SplashScreen
                  OnComplete={() => {
                    setShowSplash(false)

                    requestAnimationFrame(() => {
                      setStartAnimation(true)
                    })
                  }}
                />
              )}
              <Header />
              <Layout>
                <InsideLayout>
                  <HeroSection start={startAnimation} />
                  <About />
                  <Services />
                  <Skills />
                  <Projects />
                  <Contact />
                </InsideLayout>
              </Layout>
            </>
          }
          index
          key="base"
          path="/"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
