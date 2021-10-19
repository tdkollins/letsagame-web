import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './routes/homepage/homepage';
import Header from './components/header/header';
import Schedule from './routes/schedule/schedule'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/schedule" exact component={Schedule} />
    </Router>
  );
}

export default App;
