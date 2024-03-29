import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './page/Home/Home';
import "./app.scss";
import {LanguageProvider} from './context/languageContext'
import Sondeju from './page/Sondeju/Sondeju';
import MobileApp from './page/mobileApp/mobileApp';
import Terragenesis from './page/TerraGenesis/Terragenesis';
import Ecommerce from './page/Ecommerce/Ecommerce';
import Asd from './page/ASD/Asd';
import Digitergo from './page/DigitErgo/Digitergo';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<LanguageProvider><Home/></LanguageProvider>}></Route>
          <Route exact path='/sondeju' element={<LanguageProvider><Sondeju/></LanguageProvider>}></Route>
          <Route exact path='/mobileApp' element={<LanguageProvider><MobileApp/></LanguageProvider>}></Route>
          <Route exact path='/terragenesis' element={<LanguageProvider><Terragenesis/></LanguageProvider>}></Route>
          <Route exact path='/greenIT' element={<LanguageProvider><Ecommerce/></LanguageProvider>}></Route>
          <Route exact path='/asd' element={<LanguageProvider><Asd/></LanguageProvider>}></Route>
          <Route exact path='/digitergo' element={<LanguageProvider><Digitergo/></LanguageProvider>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
