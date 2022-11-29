import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

function Product() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoding, setIsLoding] = useState(false);

    useEffect(()=>{
      setIsLoding(true)
      console.log('feching API.....')

      setTimeout(()=>{
       setIsLoding(false);
       console.log('get DATA')
       setData(()=>[
        {id :1 , name : 'motor'},
        {id :2 , name : 'mobil'},
        {id :3 , name : 'kereta'},
        {id :4 , name : 'pesawat'},

       ])
      },2000)
    },[]);

    function ListProduct(){
        console.log('RERENDER....')
        if(isLoding){
            return <div> memuat </div>
        }
        return(
            
            <div>
             {/*WITH UNIQUE DATA*/}
             {data.map((el,idx)=>{
                return(
                    <button 
                    key={el.id}
                    onClick={()=>{navigate(`/product/${el.name.toLowerCase()}`)}}>{el.name.toUpperCase()}</button>
                );
            })}
            {/*WITHOUT UNIQUE DATA*/}
            {/* {data.map((el,idx)=>{
                return(
                    <button 
                    key={idx}
                    onClick={()=>{navigate(`/product/${el.name.toLowerCase()}`)}}>{el.name.toUpperCase()}</button>
                );
            })}*/}
          {/*<button onClick={()=>{navigate("/product/motor")}}>motor</button>
            <button onClick={()=>{navigate("/product/mobil")}}>mobil</button>
            <button onClick = {()=>{navigate("/product/kereta")}}>kereta</button>
        <button onClick = {()=>{navigate('/product/kapallaut')}}>kapal laut</button>*/}
        </div>);
    };
    
    return(
    <Container>
    {/*IF ELSE STATEMENT */}
        <ListProduct/>
    {/*TERNARY OPRATOR  */}
       {/*{
        isLoding ? (
            <div>memuat</div>
        ):(<div>
            <button onClick={()=>{navigate("/product/motor")}}>motor</button>
            <button onClick={()=>{navigate("/product/mobil")}}>mobil</button>
            <button onClick = {()=>{navigate("/product/kereta")}}>kereta</button>
            <button onClick = {()=>{navigate('/product/kapallaut')}}>kapal laut</button>
       </div>)
       } */}
       <button onClick={()=>{navigate('/Praktic')}}>kembali ke home</button>
    </Container>
    );
    
};
export default Product;