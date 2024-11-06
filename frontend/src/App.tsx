import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
