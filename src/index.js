import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  ��Card���OCardlist���lcomponent��A�N���ݭnimport
//  import Card from './Card.js'
import Cardlist from './Cardlist.js'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//  �� { } �N��n�hdestructure ��ơA�o�OES6���y�k
import {players} from './players.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Cardlist players = {players} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
