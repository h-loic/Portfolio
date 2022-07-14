import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './page/Home/Home';
import "./app.scss";
import {LanguageProvider} from './context/languageContext'
import Sondeju from './page/Sondeju/Sondeju';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<LanguageProvider><Home/></LanguageProvider>}></Route>
          <Route exact path='/sondeju' element={<LanguageProvider><Sondeju/></LanguageProvider>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
