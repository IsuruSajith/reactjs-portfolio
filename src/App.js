
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
    return (
    <Router>
            <div>
                <Routes>
                  <Route exact path='/' element={<Home/>}/>
              
                  <Route path='/about' element={<About/>}/>
            
                  <Route path='/contact' element={<Contact/>}/>
              
                </Routes>
            </div>

        </Router>

    );
}

export default App;
