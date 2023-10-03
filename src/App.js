import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">

  <Header/>
<BrowserRouter>
<Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/about' element={ <About/>}/>
  <Route path='/contact' element={ <Contact/>}/>

  
</Routes>

 
</BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
