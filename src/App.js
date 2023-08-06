import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TechStack from "./pages/TechStack";
import Education from "./pages/Education";


function App() {
    return (<Router>
            <div>
                <Routes>

                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/experience' element={<Experience/>}/>
                    <Route exact path='/education' element={<Education/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/techstack' element={<TechStack/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/contact' element={<Resume/>}/>
                </Routes>
            </div>

        </Router>

    );
}

export default App;
