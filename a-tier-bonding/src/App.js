import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
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
      <Route path="/" exact component={Home} />
      <Route path="/schedule" exact component={Schedule} />
      <Route path="/team" exact component={Team} />
      <Route path="/sweepstakes" render={() => {
        window.location.href = '/sweepstakes.pdf';
        return null;
      }}/>
      <Route path="/giveaway" render={() => {
        window.location.href = '/sweepstakes.pdf';
        return null;
      }}/>
      <Footer/> 
    </Router>
    </div>
  );
}

export default App;
