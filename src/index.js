import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProfile from "./AppProfile";
import AppChildren from "./component/AppChildren";
import Appform from "./component/Appform";
import Playlist from "./component/Playlist";
import Lists from "./component/Lists";
import DarkMode from "./component/DarkMode";
import Profile from "./component/Profile";
import DarkModeProvider from "./hooks/DarkModeProvider";
import ColorChangeProvider from "./hooks/ColorChangeProvider";
import ColorChange from "./component/ColorChange";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorChangeProvider>
      <Playlist/>
      <ColorChange/>
    </ColorChangeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
