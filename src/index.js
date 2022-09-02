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
import Project1Routes from './components/project1/Project1Routes';
import SearchPage from './components/project2/SearchPage';
import NotesMainpage from './components/project4(Notes app)/NotesMainpage';
import PokemanHomePage from './components/Project5(Pokeman API)/PokemanHomePage';
import ReviewRouteTable from './Project6(for knovator,Gujurat)/ReviewRouteTable';
import TodoMainPage from './project7(To do list)/TodoMainPage';
import StartRouteTable from './components/project8(Exam for start)/StartRouteTable';



const root = ReactDOM.createRoot(document.getElementById('root'));

//<PortfolioRoutes/>
//<PortfolioRoutes/>
//<SearchPage/>
//<Project1Routes />
//<NotesMainpage />
//<PokemanHomePage/>
//<TodoMainPage />
//<StartRouteTable />
root.render(
  <React.StrictMode>
    <ReviewRouteTable/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
