
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomePage from './homePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<HomePage /> } />
      </Routes> 
    </Router>
  );
}

export default App;
