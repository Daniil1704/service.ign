import React, { useState } from 'react';
import Footer from './Footer';

import Main from './Main';
import wiki from '../images/wiki.png'
import videoportal from '../images/videoportal.png'
import bsi from '../images/bsi.png'
import BSIKonf from '../images/bsispec.png'
import HelpDesk from '../images/helpdesk.png'
import BimCabinet from '../images/bimcabinet.png'


function App() {

  const serverUrlWiki = "http://vspignitdev:5555";
  const serverUrlVidio = "http://vspignitdev:5454";
  const serverUrlBSI = "http://vspignitdev:8787";
  const serverUrlBSIKonf = "http://vspignitdev:7800";
  const serverUrlHelpDesk = "http://vspignitdev:1313";
  const serverUrlBimCabinet = "http://vspignitdev:7850";
  const cards = [
    {
      title: "Wiki",
      image: wiki,
      subtitle: "База знаний Гипроникель.",
      text: "Статьи и инструкции по различным направлениям.",
      link: serverUrlWiki,
      status: "production"
    },
    {
      title: "Видеопортал",
      image: videoportal,
      subtitle: "Сервис видеоматериалов.",
      text: "Видеоуроки, записи онлайн обучений, семинаров и конференций.",
      link: serverUrlVidio,
      status: "production"
    },
    {
      title: "BIMSpecInfo",
      image: bsi,
      text: "Сервис для работы с атрибутивной информацией интегрированной BIM модели",
      link: serverUrlBSI,
      status: "beta"
    },
    {
      title: "BIMSpecInfo",
      subtitle: "Конфигуратор",
      image: BSIKonf,
      text: "Идёт активная разработка...",
      link: serverUrlBSIKonf,
      status: "beta"
    },
    {
      title: "HelpDesk",
      image: HelpDesk,
      text: "Сервис заявок в УОИМ",
      link: serverUrlHelpDesk,
      status: "beta"
    },
    {
      title: "BIMCabinet",
      image: BimCabinet,
      text: "Кабинет BIM-менеджера",
      link: serverUrlBimCabinet,
      status: "beta"
    }

  ]

  // этап 1: чтение из localstorage значения сохраненной темы

  var userState = JSON.parse(localStorage.getItem("LinkHub_UserTheme")); // присвоили прочитанное значение

  var [darkMode, setDarkMode] = useState(userState); // 
  //var darkMode;
  //etDarkMode(true);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} >

      <header className="header">
        <h1 className="header__logo">Сервисы УОИМ</h1>
        <div className="switch-checkbox">
          <h3 className='card__switch'>{"Темная тема"}</h3>
          <label className="switch">
            {/* <input type="checkbox" onClick={() => darkMode = false} /> */}
            <input type="checkbox" checked={darkMode} onChange={() => {
              localStorage.setItem("LinkHub_UserTheme", !darkMode);
              setDarkMode(!darkMode);
            }} />
            <span className="slider round"> </span>
          </label>
        </div>
      </header>



      <Main

        cards={cards}

      />
      <Footer />
    </div>
  );
}

export default App;
