import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/jquery/dist/jquery"
import Welcome from './components/welcome';
import Mainpage from './components/Portfolio/Mainpage';
import PortfolioRoutes from './components/Portfolio/PortfolioRoutes';
import ShopifyRouteTable from './components/Shopify/ShopifyRouteTable';
import Test from './components/Shopify/Test';
import { CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root'));

//
root.render(
  <React.StrictMode>
   <PortfolioRoutes/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
