import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Header } from "./components"
import { InsideLayout, Layout } from "./layouts"
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
