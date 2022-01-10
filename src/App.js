import './App.css';
import Intro from './directories/intro';
import Home from './directories/Home';
import About from './directories/About';
import NavBar from './directories/Navbar';
import Skills from './directories/Skills';
import Projects from './directories/Projects';
import Email from './directories/Email';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <About/>
      {/*<About/>*/}
      
    </div>
  );
}

export default App;
