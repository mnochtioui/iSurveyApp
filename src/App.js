import './App.css';
import SurveyApp from './Components/SurveyApp';
import Resultat from './Components/Resultat';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <div className="container">
      <hr />
      
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/survey" element={<SurveyApp />} />
          <Route path="/result" element={<Resultat />} />
          <Route path="/about" element={<AboutPage />} />
           
          
        </Routes>
    </div>
  );
}

export default App;
