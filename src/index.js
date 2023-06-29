import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//  ��Card���OCardlist���lcomponent��A�N���ݭnimport�A�P�z�ACardlist�]�Q��JApp�@���L���lcomponent
// import Card from './Card.js'
// import Cardlist from './Cardlist.js'

import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//  �� { } �N��n�hdestructure ��ơA�o�OES6���y�k
//  �]��Cardlist�ܦ�App���lcomponent�A�ϱoCardlist��props�]�n�令import�i�hApp�A�Ӥ��ݭnimport��index.js
// import {players} from './players.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p className='tc'>Due to copyright issues regarding players, we have adopted to use resources from a <a className='white hover-light-red' href="https://robohash.org/" >cat image generator website</a> as an alternative.</p>
    <h5 className='tc'>Copyright to <a className='white hover-light-red' href="https://github.com/imladris20" >Po-Lien Lin</a></h5>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
