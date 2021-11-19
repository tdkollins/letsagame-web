import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './routes/Homepage/homepage';
import Header from './components/Header/header';
// import Schedule from './routes/Schedule/schedule'; 
import Footer from './components/Footer/footer'

function App() {
  return (
    <div>  
    <Router>
      <Header/>
      <Route path="/" exact component={Home} />
      {/* <Route path="/schedule" exact component={Schedule} /> */}
      <Footer/> 
    </Router>
    </div>
  );
}

export default App;
