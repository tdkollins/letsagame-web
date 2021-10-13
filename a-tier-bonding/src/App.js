import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './routes/homepage/homepage'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
