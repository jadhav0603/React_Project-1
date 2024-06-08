import './App.css'
import Navbar from "./components/Navbar"
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer'
import { SelectedOptionContext } from './components/SelectedOptionContext';

function App() {

  return (
      <div id="mainContainer">
        <div style={{position:"fixed", width:"100%",zindex:1000}}>
        <Navbar />
        </div>

        <div style={{paddingTop:"120px"}}>
          <AllRoutes />
          <Footer/>
        </div>
      </div>
  )
}

export default App
