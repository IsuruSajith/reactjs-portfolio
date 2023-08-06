import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TechStack from "./pages/TechStack";


function App() {
    return (<Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/experience' element={Experience}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/techstack' element={<TechStack/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                </Routes>
            </div>

        </Router>

    );
}

export default App;
