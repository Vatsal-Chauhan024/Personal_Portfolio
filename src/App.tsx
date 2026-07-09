import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Header } from "./components"
import { InsideLayout, Layout } from "./layouts"
import About from "./sections/About"
import HeroSection from "./sections/HeroSection"
import Services from "./sections/Services"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Header />
              <InsideLayout>
                <HeroSection />
                <About />
                <Services />
                <Skills />
              </InsideLayout>
            </Layout>
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
