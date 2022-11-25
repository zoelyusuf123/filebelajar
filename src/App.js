
import './App.css';
// import {useEfact,useState} from "react";
import Navbar from'./pages/Navbar.js';
import Elemen2 from'./pages/Elemen2.js';
import Elemen1 from'./pages/Elemen1';
import Food from'./pages/Food.js';
import Hobi from'./components/Hobi.js';
import Homepage from'./pages/Homepage';
import Favorit from'./pages/faforite';
import Pokemon from'./pages/Pokemon';
import Biodata from'./pages/Biodata';
import Menu from'./pages/Menu';
import Kode from './pages/Kode';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Editprospek from './pages/Editprospek';
import Detailprospek from './pages/Detailprospek';
import Praktic from './pages/praktic';
import Product from './pages/product';

import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detailproduct';
import { Container } from 'postcss';


function App() {
// const [activeMenu,setActiveMenu]=
// useState('hobies');
  return(
       <Routes>
           {/*static path*/}
          <Route exact path='/Navbar'element={<Navbar/>}></Route>
          <Route exact path='/Elemen2'element={<Elemen2/>}></Route>
          <Route exact path='/Elemen1'element={<Elemen1/>}></Route>
          <Route exact path='/Food'element={<Food/>}></Route>
          <Route  path='/Hobi'element={<Hobi/>}/>
          <Route exact path='/Homepage'element={<Homepage/>}></Route>
          <Route exact path='/Pokemon'element={<Pokemon/>}></Route> 
          <Route exact path='/Biodata'element={<Biodata/>}></Route> 
          <Route exact path='/faforite/:type'element={<Favorit/>}></Route> 
          <Route exact path='/Menu'element={<Menu/>}></Route> 
          <Route exact path='/Kode'element={<Kode/>}></Route>
          <Route exact path='/Dashboard'element={<Dashboard/>}></Route>
          <Route exact path='/Order'element={<Order/>}></Route>
          <Route exact path='/Editprospek'element={<Editprospek/>}></Route>
          <Route exact path='/Detailprospek'element={<Detailprospek/>}></Route>
          <Route exact path='/Praktic'element={<Praktic/>}></Route> 
          <Route path='/Product' element={<Product/>}/>
          <Route path='/container' element={Container}/>
          {/*dinamic path*/}
          <Route exact path='/Product/:product' element={<Detail/>}/>
        </Routes>
    );
}
export default App;
