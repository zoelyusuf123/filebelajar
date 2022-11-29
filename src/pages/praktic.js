import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
function Praktic() {
  // const [count,setCount] = useState(0)
const [panjang,setPanjang] = useState(0);
const [lebar, setLebar] = useState(0);

  const navigate = useNavigate();
  return (
   <Container>
    <div className="praktic-baground-on">
    <div>
    </div>
      <div>Menu</div>
    {/* <div>{count}diamont</div>*/}
      {/* <button onClick={()=>{setCount((prev)=> prev + 1)}}>tambah</button>*/}
       <div>{panjang}panjang</div>
      <div>{lebar} lebar</div>
       <button onClick={()=>{setPanjang((totalPanjang)=>totalPanjang + 1)}}>add panjang</button>
       <button onClick={()=>{setLebar((totalLebar)=>{
        if(totalLebar + 1 <= panjang){
          return totalLebar + 1;
        }else{
          setPanjang(()=> totalLebar + 1);
            return totalLebar + 1;
          
        }

       })}}>add Lebar </button>
      <button className="on-navbar" onClick={()=>{navigate('/Biodata')}}>DOCOMENT</button>
      <button className="on-navbar" onClick={()=>{navigate('/Product');}}>COMPONENT</button>
      <Button label="Masuk" variant="login" />
    </div>
    <div className="praktic-body"> 
      <Button label="action"/>
      <div>
      <Link to='/Order'>masuk</Link>
      </div>
    </div>
   </Container>
   
  );
}
export default Praktic;
