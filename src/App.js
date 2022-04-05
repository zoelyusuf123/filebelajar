
import './App.css';
import {useEfact,useState} from "react";
import Navbar from'./components/Navbar/Navbar.js';
import Elemen1 from'./components/Elem1.js';
import Hobi from'./components/Hobi.js';
import Makanan from'./components/Food.js';
import Elemen2 from'./components/Bawah.js';

function App() {
const [activeMenu,setActiveMenu]=
useState('hobies');

  return(
    <div>
        <Navbar></Navbar>
        <Elemen1></Elemen1>
        <Hobi></Hobi>
        <Makanan></Makanan>
        <Elemen2></Elemen2>
    </div>
    );
}
export default App;
