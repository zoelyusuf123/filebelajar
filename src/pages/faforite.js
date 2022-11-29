import { useNavigate, useParams } from 'react-router-dom';
function Favorit() {
    const {type} = useParams();
    const navigate = useNavigate();
    return(
        <div>
         <div>Favorit</div>
         <div>{type}</div>
         <button onClick={()=>navigate('/Hobi')}>TO Hobi</button>
         <button onClick={()=>navigate('/Food')}>TO Food</button>
         <button onClick={()=>navigate('/Homepage')}>TO Homepage</button>
        </div>
    );
    
}

export default Favorit;