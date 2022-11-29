import { useNavigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import {useState, useEffect} from "react";

function Detail(){
    const navigate = useNavigate();
    const params = useParams();
    console.log('PARAMS',params)
    const [num, setNum] = useState(0);
    const [numPower, setNumPower] = useState(num ** 2);
    useEffect(()=>{
        console.log('hello word')
        // ini tersekusi di awal 
    },[])
    useEffect(()=>{
        console.log('hello my broder')
        setNumPower(()=>num ** 2)
    },[num])
    return(
        <Container>
            <div>{num} maka kuadratnya adalah {numPower}</div>
                <button onClick={()=>{setNum((prev)=>{
                        return prev + 1
                    });
                }}>add number</button>
            <div>
                 <div> ini adalah: {params.product}</div>
            </div>
            <button onClick={()=>{navigate('/product')}}>back</button>
        </Container>
          
    );     
};
export default Detail;