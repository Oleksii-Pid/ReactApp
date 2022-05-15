import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
const DATA = [
  {id: "1", adjective: "wysoka", correct: "wyższa", textBeforeInput: "Anka jest", textAfterInput: "niż Tom."},
  {id: "2", adjective: "piękny", correct: "piękniejszy", textBeforeInput: "Ten taniec jest", textAfterInput: "niż poprzedni."},
  {id: "3", adjective: "drogi", correct: "droższy", textBeforeInput: "Mój szalik jest", textAfterInput: "od twojego."},
  {id: "4", adjective: "mały", correct: "mniejszy", textBeforeInput: "Zielony plecak jest", textAfterInput: "od żółtego."},
  {id: "5", adjective: "duży", correct: "większy", textBeforeInput: "Dom mojej przyjaciółki jest", textAfterInput: "od mojego."},
  {id: "6", adjective: "niski", correct: "niższy", textBeforeInput: "Mój kuzyn jest", textAfterInput: "niż moja kuzynka."},
  {id: "7", adjective: "ładna", correct: "ładniejsza", textBeforeInput: "Moja sukienka jest", textAfterInput: "niż twoja."}

]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks = {DATA}/>
  </React.StrictMode>
);