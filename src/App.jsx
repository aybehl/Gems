import './App.css'
import Explore from './pages/Explore';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/explore" element={<Explore />}/>
        </Routes>        
      <Footer/>
    </BrowserRouter>
  )
}

export default App
