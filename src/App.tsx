import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { Header } from "./components"
import { InsideLayout, Layout } from "./layouts"
import About from "./sections/About"
import Contact from "./sections/Contact"
import HeroSection from "./sections/HeroSection"
import Projects from "./sections/projects/Projects"
import Services from "./sections/Services"
import Skills from "./sections/Skills"

const App = () => {
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
              <Header />
              <Layout>
                <InsideLayout>
                  <HeroSection />
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
