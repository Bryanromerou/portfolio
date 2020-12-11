import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import AllProjects from './components/projects/AllProjects';
import ReactSnapScroll from 'react-snap-scroll';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <AllProjects/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App;
