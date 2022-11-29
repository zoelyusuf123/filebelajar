
import { useNavigate } from 'react-router-dom';
import logodemodi from'../logodemodi.svg';
import Vektoratas from'../Vectoratas.svg';
import vector from'../Vector.png';
function Detailprospek() {
    const navigate = useNavigate();
    return(
        <div className="container-dashboard">
            <div className="dashboard-head">
                <img className='head-logo' src={logodemodi}/>
                <input className='head-search'></input>
                <div className='head-money'>
                    <img className='money' src={Vektoratas} alt=''></img>
                    <div>RP.1.000.000</div>
                </div>
                <div className='head-write'>
                    <img className='write' src={vector}/>
                    <div>zuhiyandiyusuf</div>
                </div>
            </div>
            <div className="dashboard-body">
                <div className="body-left">
                    <div className='left-menu'>Menu</div>
                    <button className='left-dashboard'>Dashboard</button>
                    <button className='left-order'>Order</button>
                    <button className='left-report'>Report</button>
                    <button className='left-master'>Master Data</button>
                </div>
                <div className="body-right">
                    <div className='right-order'>Buat Tabel Prospek</div>
                    <div>order buat prospek</div>
                    <div>Nama Lengkap</div>
                    <div>M.Zulhiyandi Yusuf</div>
                    <div>nomor handphone</div>
                    <div>081217008122</div>
                    <div>
                        <div>
                            <div>provinsi</div>
                            <div>jawabarat</div>
                        </div>
                        <div>
                            <div>kota</div>
                            <div>bandung</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Kecamatan</div>
                            <div>bojongloa kidul</div>
                        </div>
                        <div>
                            <div>Kelurahan</div>
                            <div>bojongloa kidul</div>
                        </div>
                    </div>
                    <div>alamat</div>
                    <div>jalan cibaduyut nomor 20</div>
                    <div>
                        <div>
                            <div>metode pembayaran</div>
                            <div>cas</div>
                            <div>kepemilikan rumah</div>
                            <div>sendiri</div>
                            <div>akses kendaraan kerumah</div>
                            <div>jalan sendiri</div>
                            <div>tanggal pengriman unit</div>
                            <div>10/05/1998</div>
                            <div>kesedian dana </div>
                            <div>siap</div>
                            <div>boking fee</div>
                            <div>siap</div>
                        </div>
                        <div>
                            <div>merek </div>
                            <div>honda</div>
                            <div>type</div>
                            <div>jazz</div>
                            <div>drawing payment</div>
                            <div>20%</div>
                            <div>type Asuransi</div>
                            <div>combinasi</div>
                            <div>discount </div>
                            <div>QWERTY123</div>
                            <div>boking fee</div>
                            <div>siap</div>
                          
                        </div>
                        <div>
                        <div>Leasing untuk metode kreadit</div>
                        <div>Leasing surya</div>
                        <div>kunjungan selanjutnya </div>
                        <div>13/05/1990</div>
                        <div>foto</div>
                        <img/>
                        </div>
                    </div>
                    <div>
                        <button>download</button>
                        <button>edit</button>
                        <button>delet</button>
                    </div>
                    
                    



                </div>
            </div> 
        </div>

    );
}
export default Detailprospek;