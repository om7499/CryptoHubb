
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "/node_module/bootstrap/dist/css/bootstrap.css";
// import "./node_module/bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store } from './redex/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Provider store={store}>
         <App />
     </Provider>
    <ToastContainer/>
  </BrowserRouter>,
)
