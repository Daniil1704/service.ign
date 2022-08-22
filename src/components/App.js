import React, {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes 
} from "react-router-dom";
import Footer from './Footer';
import LinkHub from './LinkHub';
import Omk from '../pages/Omk';
import Orp from '../pages/Orp';
import Transformation from '../pages/Transformation';
const App = () => {

  var userState = JSON.parse(localStorage.getItem("LinkHub_UserTheme")); // присвоили прочитанное значение

  var [darkMode, setDarkMode] = useState(userState); // 

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} >
    <BrowserRouter>
     <header className="header">

    <a href="/" onСlick="history.back();return false;" class="history-back">
      <button className='button__back'>
        Назад
      </button>
    </a>
        <h1 className="header__logo">Внутренние сервисы ИГН</h1>
        <div className="switch-checkbox">
          <h3 className='card__switch'>{"Темная тема"}</h3>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={() => {
              localStorage.setItem("LinkHub_UserTheme", !darkMode);
              setDarkMode(!darkMode);
            }} />
            <span className="slider round"> </span>
          </label>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<LinkHub />} />
        <Route path='/omk' element={<Omk />} />
        <Route path='/orp' element={<Orp />} />
        <Route path='/transformation' element={<Transformation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
