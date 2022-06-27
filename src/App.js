import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './page/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
