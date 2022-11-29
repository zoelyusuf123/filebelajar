import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Homepage() {
   
    const navigate = useNavigate();
    const [data, setData] = useState([]);  
    useEffect(() => {
        axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      .then((response) => setData(response?.data?.data))
      .catch((err) => console.log(err));
     }, []);

      function handleClick() {
        axios
          .get(
            'db.ygoprodeck.com/api/v7/carhttps://dinfo.php?archetype=Dark Magician'
          )
          .then((response) => setData(response?.data?.data))
          .catch((err) => console.log(err));
      }
    
      console.log(data);
    return(
        <div> 
         <button onClick={()=>navigate('/Elemen1')}>TO Biodata</button>
         <button onClick={()=>navigate('/faforite')}>TO favorit</button>
         <button onClick={() => handleClick()}>DARK MAGICIAN</button>
        <div style={{ display: 'flex-center', gap: '16px', alignContent:'space-between', justifyContent:'center'}}>
        {data?.map((e) => (
          <div>
            <div>{e?.name}</div>
            <img src={e?.card_images[0].image_url_small} alt='' />
          </div>
        ))}
      </div>
        </div>
    )
    
}

export default Homepage;