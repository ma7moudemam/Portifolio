import About from './About/About';
import './App.css';
import Landing from './Landing Page/Landing';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
