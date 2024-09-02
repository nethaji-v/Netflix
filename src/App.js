import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import Sign from './sign/Sign';
import HomePage from './homepage/HomePage';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Sign" element={<Sign/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
