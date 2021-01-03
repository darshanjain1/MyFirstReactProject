import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import arr1 from './arr'

const Greeting= () =>{
  return <div>
            <h1>{arrnew}</h1>
        </div>
}


var arrnew=arr1.map(nam => {return(    <div>
                                  <h1>{nam.name}</h1>
                                  <h1>{nam.age}</h1>
                                  <h1>{nam.place}</h1> 
                                  </div>
                                  );
                         }
                    )
                    
ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
