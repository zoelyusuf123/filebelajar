import { useNavigate } from 'react-router-dom';
import logodemodi from'../logodemodi.svg';
import car from'../car.svg';
import Rectangle from '../Rectangle.svg'


function Kode() {
    const navigate = useNavigate();
    return(
        <div className="container-login">
            <div className="login-form">
                <div className='form-item'>
                    <div className='item-OTP'>MASUKAN KODE OTP</div>
                    <div className='item-font'>Kode OTP dikirimkan melalui email</div>
                    <div className='item-text'>zulhiyandiyusuf@gmail.com</div>
                    <div className='item-item'>
                        <img className='item-code' src={Rectangle} alt=''></img>
                        <img className='item-code' src={Rectangle} alt=''></img>
                        <img className=' item-code' src={Rectangle} alt=''></img>
                        <img className='item-code' src={Rectangle} alt=''></img>
                    </div>
                    <div className='item-font-code'>OTP berlaku sampai </div>
                    <button onClick={()=>navigate('/Dashboard')}  className='item-button-code'>masuk</button>
                    <div className='item-font-lower'>belum menerima OTP</div>
                    <div className='item-text-lower'>kirim ulang / ubah email</div>
                </div>
            </div>
            <div className="login-bener">
                <div className='bener-picture'>
                    <img className="picture" src={logodemodi} alt=''/>
                </div>
                <div  className='bener-car'>
                    <img className='car' src={car} alt=''></img>
                </div>
            </div>

        </div>
    );
    
    
}
export default Kode;