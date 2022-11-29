
import { useNavigate } from 'react-router-dom';
import logodemodi from'../logodemodi.svg';
import Vektoratas from'../Vectoratas.svg';
import vector from'../Vector.png';
function Order() {
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
                    <div className='right-order'>Order</div>
                    <div className='right-menu'>
                        <div className='menu-prospek'>Tabel prospek</div>
                        <div className='menu-menu'>
                            <input type='search' placeholder='masukan nama' className='menu-input'></input>
                            <button onClick={()=>navigate('/Editprospek')} className='menu-button'>+ tambah prospek</button>
                        </div>
                    </div>
                    <div className='right-data'>
                        <div>
                            <div className='data-chapter'>NO</div>
                            <div className='data-table'>1</div>
                            <div className='data-table'>2</div>
                            <div className='data-table'>3</div>
                            <div className='data-table'>4</div>
                            <div className='data-table'>5</div>
                            <div className='data-table'>6</div>
                            <div className='data-table'>7</div>
                        </div>
                        <div>
                            <div className='data-chapter'>AKSI</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                        </div>
                        <div>
                        <div className='data-chapter'>STATUS</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Panding</div>
                        </div>
                        <div>
                            <div className='data-chapter'>Nama pemesan</div>
                            <div className='data-table'>GUNANDAR PRASETIO</div>
                            <div className='data-table'>M. ZULHIYANDI YUSUF</div>
                            <div className='data-table'>RIO KURNIAWAN</div>
                            <div className='data-table'>RIYAN RAMADHAN</div>
                            <div className='data-table'>I.GEDE ASTA</div>
                            <div className='data-table'>MUKTI AJI GUNO</div>
                            <div className='data-table'>KEVIN VIRGIAWAN</div>
                        </div>
                        <div>
                        <div className='data-chapter'>Nomor handphone</div>
                            <div className='data-table'>088287760824</div>
                            <div className='data-table'>088287760825</div>
                            <div className='data-table'>088287760821</div>
                            <div className='data-table'>088287760827</div>
                            <div className='data-table'>088287760828</div>
                            <div className='data-table'>088287760829</div>
                            <div className='data-table'>088287760820</div>
                        </div>
                        <div>
                            <div className='data-chapter'>metode pembayaran</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                        </div>
                        <div>
                        <div className='data-chapter'>tanggal pengiriman unit</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>13/05/2022</div>
                            <div className='data-table'>14/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>12/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                        </div>
                        <div>
                        <div className='data-chapter'>tanggal kunjungan</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>13/05/2022</div>
                            <div className='data-table'>14/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                            <div className='data-table'>12/05/2022</div>
                            <div className='data-table'>11/05/2022</div>
                        </div>
                       
                    </div>

                </div>
            </div> 
        </div>

    );
}
export default Order;