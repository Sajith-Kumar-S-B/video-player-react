import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Watchhistory from './Pages/Watchhistory';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        
      <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<Watchhistory/>} />


      </Routes>
      <hr />
      <Footer/>

      
    </div>
  );
}

export default App;
