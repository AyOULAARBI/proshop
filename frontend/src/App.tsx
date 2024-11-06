import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./screens/Home";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
