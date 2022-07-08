import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './page/Home/Home';
import "./app.scss";
import {LanguageProvider} from './context/languageContext'

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<LanguageProvider><Home/></LanguageProvider>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
