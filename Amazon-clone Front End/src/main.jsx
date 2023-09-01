import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import reducer, { initialState } from './reducer';
// import { StateProvider } from './StateProvider';

// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );