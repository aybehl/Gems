import './App.css'
import Explore from './pages/Explore';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
          {/* <Homepage/> */}
          <Explore/>
      <Footer/>
    </>
  )
}

export default App
