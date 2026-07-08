import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Header } from "./components"
import { InsideLayout, Layout } from "./layouts"
import About from "./sections/About"
import HeroSection from "./sections/HeroSection"

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
