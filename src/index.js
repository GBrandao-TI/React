import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//relogio e letreiro
import Relogio from './Relogio';
import Letreiro from './Letreiro';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function RelogioContainer() {
  return (
      <div className="Relogio">
        <header className="Relogio-header">
          <Relogio />
        </header>
      </div>
  );
 }

 function LetreiroContainer(){
  return(
    <div className="Letreiro">
        <header className="Letreiro-header">
          <Letreiro />
        </header>
    </div>
  )
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <RelogioContainer />
    <LetreiroContainer />

 </React.StrictMode>
);


 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
