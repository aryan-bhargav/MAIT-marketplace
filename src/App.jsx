import Navbar  from "./Components/Navbar"
import Landing from './Pages/Landing'
import { Routes,Route } from 'react-router-dom';
import Browse from './Pages/Browse';
import Sell from './Pages/Sell';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
