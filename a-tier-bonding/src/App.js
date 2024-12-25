import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/homepage/homepage';
import Header from './components/header/header';
import Schedule from './routes/schedule/schedule'; 
import Footer from './components/footer/footer'
import Team from './routes/team/team'
 
function App() {
  return (
    <div>  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/sweepstakes" render={() => {
          window.location.href = '/sweepstakes.pdf';
          return null;
        }}/>
      </Routes>
      <Footer/> 
    </Router>
    </div>
  );
}

export default App;
