import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Header } from "./components"
import { Layout } from "./layouts"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Header />
              <h2>Hello There how you doing?.....</h2>
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
