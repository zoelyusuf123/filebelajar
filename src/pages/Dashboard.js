import { useNavigate } from 'react-router-dom';
import logodemodi from'../logodemodi.svg';
import gambar from'../Gambartabel.jpg';
import Vektoratas from'../Vectoratas.svg';
import vector from'../Vector.png';
function Dashboard() {
    const navigate = useNavigate();
    return(
        <div className="container-dashboard">
            <div className="dashboard-head">
                <img className='head-logo' src={logodemodi}/>
                <input placeholder='Cari sesuatu di sini' type='search' className='head-search'></input>
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
                    <button onClick={()=>navigate('/Order')} className='left-order'>Order</button>
                    <button className='left-report'>Report</button>
                    <button className='left-master'>Master Data</button>
                </div>
                <div className="body-right">
                    <div className='right-dashboard'>Dashboard</div>
                    <div className='right-diagram'>
                        <button className='diagram-panding'>(50%)  Panding Rate</button>
                        <button className='diagram-deal'>(75%) Deal Rate</button>
                        <button className='diagram-cancel'>(25%) Cancel Rate</button>
                        <button className='diagram-total'>
                            <div>3.150</div>
                            <div>total diagram</div>
                        </button>
                    </div>
                    <div className='right-statistic'>statistic</div>
                    <div className='right-grafic'>
                        <img className='grafic-picture' src='https://as1.ftcdn.net/v2/jpg/01/70/56/08/1000_F_170560808_yFiSpqVmddBP9H24s4GW22c43lUHLE29.jpg'></img>
                        <div>
                            <div>prospek area terbanyak</div> 
                            <div>kota bandung</div>
                            <div>kabupaten sumedang</div>
                            <div>kabupaten cianjur</div>
                            <div>kota surabaya</div>
                            <div>kota jakarta pusat</div>
                            <div>kota jakarta selatan</div>
                            <div>kabupaten tangerang</div>
                            <div>kota cimahi</div>
                            <div>kabupaten bandung barat</div>
                            <div>kota garut</div>
                            <div>kota tasikmalaya</div>
                            <div>kota cirebon</div>
                        </div>
                        <div>
                            <img/>
                            <div>450</div>
                            <div>449</div>
                            <div>443</div>
                            <div>441</div>
                            <div>420</div>
                            <div>412</div> 
                            <div>411</div>
                            <div>390</div>
                            <div>387</div>
                            <div>376</div>
                            <div>449</div>
                            <div>449</div>
                        </div>
                    </div>
                    <div className='right-table'>table prospek</div>
                    <div className='right-data'>
                        <div className='data-data'>
                            <div className='data-chapter'>NO</div>
                            <div className='data-table'>1</div>
                            <div className='data-table'>2</div>
                            <div className='data-table'>3</div>
                            <div className='data-table'>4</div>
                            <div className='data-table'>5</div>
                            <div className='data-table'>6</div>
                            <div className='data-table'>7</div>
                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>AKSI</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                            <div className='data-table'>Detail</div>
                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>STATUS</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Deal</div>
                            <div className='data-table'>Panding</div>
                            <div className='data-table'>Panding</div>

                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>Nama pemesan</div>
                            <div className='data-table'>GUNANDAR PRASETIO</div>
                            <div className='data-table'>M. ZULHIYANDI YUSUF</div>
                            <div className='data-table'>RIO KURNIAWAN</div>
                            <div className='data-table'>RIYAN RAMADHAN</div>
                            <div className='data-table'>I.GEDE ASTA</div>
                            <div className='data-table'>MUKTI AJI GUNO</div>
                            <div className='data-table'>KEVIN VIRGIAWAN</div>

                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>Nomor handphone</div>
                            <div className='data-table'>088287760824</div>
                            <div className='data-table'>088287760825</div>
                            <div className='data-table'>088287760826</div>
                            <div className='data-table'>088287760827</div>
                            <div className='data-table'>088287760828</div>
                            <div className='data-table'>088287760829</div>
                            <div className='data-table'>088287760820</div>
                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>metode pembayaran</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                            <div className='data-table'>cas</div>
                            <div className='data-table'>credit card</div>
                        </div>
                        <div className='data-data'>
                            <div className='data-chapter'>tanggal pengiriman unit</div>
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
export default Dashboard;