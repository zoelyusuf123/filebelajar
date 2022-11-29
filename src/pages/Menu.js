import { useNavigate } from 'react-router-dom';
import logodemodi from'../logodemodi.svg';
import car from'../car.svg';
function Menu() {
  const navigate = useNavigate();
  return(
      <div className="container-login">
        <div className="login-form">
           <div className='form-item'>
              <div className='item-head'>Masukan Akun Demodi</div>
              <div className='item-body'>Gunakan Username Dan Pasword Anda</div>
              <div className='item-top'>Email</div>
              <input placeholder='Masukan Email Anda' className='item-email'></input>
              <div className='item-top'>Kata Sandi</div>
              <input type="password" placeholder='Masukan Pasword Anda' className='item-pasword'></input>
              <div className='item-report'>Lupa kata sandi?</div>
              <button onClick={()=>navigate('/kode')} className='item-button'>Masuk</button>
          </div>
        </div>
        <div className="login-bener">
          <div className='bener-picture'>
            <img className='picture' src={logodemodi} alt=''/>
          </div>
          <div className='bener-car'>
            <img className='car' src={car}/>
          </div>
        </div>
      </div>
          
  );
    
}

export default Menu;