import logodemodi from'../logodemodi.svg';
function Editprospek() {
    return(
        <div className="container-dashboard">
            <div className="dashboard-head">
                <img className='head-logo' src={logodemodi}/>
                <input className='head-search'></input>
                <img/>
                <div className='head-money'>RP.1.000.000</div>
                <img/>
                <div className='head-write'>zuhiyandiyusuf</div>
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
                    <div>order>buat prospek</div>
                    <div className='right-table'>profile</div>
                    <div className='right-profile'>
                        <div>
                            <div>Nama Lengkap</div>
                            <input className='profile-name'/>
                        </div>
                        <div>
                            <div>Nomor handphone</div>
                            <input className='profile-name'/>
                        </div>
                    </div>
                    <div className='right-profile'>
                        <diV>
                            <diV>PROVINSI</diV>
                            < input className='profile-area'></input>
                        </diV>
                        <diV>
                            <diV>Kota</diV>
                            <input className='profile-area'/>
                        </diV>
                        <diV>
                           <diV>Kecamatan</diV>
                           <input className='profile-area'/>
                        </diV>

                        <diV>
                          <diV>Kelurahan</diV>
                          <input className='profile-area'/>
                        </diV>
                    </div>
                    <div className='right-profile2'>
                        <div>
                            <div>alamat</div>
                            <input  className='profile-name'></input>
                        </div>
                        <div>
                            <div>RT</div>
                            <input className='item-email'/>
                        </div>
                        <div>
                            <div>Rw</div>
                            <input className='item-email'/>
                        </div>
                    </div> 
                    <div>interview</div>
                    <div className='right-profile3'>
                        
                        <div className='profile3-left'>
                        <div>metode pembayaran</div>
                            <div  className='left-table'>
                                <div>cas</div>
                                <div>credit</div>
                                <div></div>
                            </div>
                            <div>kepemilikan rumah</div>
                            <div  className='right-profile2'>
                                <div>sendiri</div>
                                <div>kontrak</div>
                                <div>Lainya</div>
                            </div>
                            <div>akses kendaraan kerumah</div>
                            <div  className='right-profile2'>
                                <div>jalan sendiri</div>
                                <div>naik motor k</div>
                                <div>tidak ada</div>
                            </div>
                            <div>tgl pengiriman unit</div>
                            <div  className='right-profile2'>
                                <div>dd/mm/yyyy</div>
                            </div>
                            <div>kesediaan dana</div>
                            <div  className='right-profile2'>
                                <div>siap</div>
                                <div>belum</div>
                                <div></div>
                            </div>
                            <div>boking fee</div>
                            <div  className='right-profile2'>
                                <div>siap</div>
                                <div>belum</div>
                                <div></div>
                            </div>
                        </div>
                        <div className='profile3-right'>
                            <div className='right-merek'>
                                <div>
                                    <div className='merek-chapter'>merek</div>
                                    <input className='merek-input'/>
                                </div>
                                <div>
                                    <div className='merek-chapter'>type</div>
                                    <input className='merek-input'/>
                                </div>
                                <div></div>
                            </div>
                            <div className='merek-chapter'>Down Payment</div>
                            <div  className='right-merek'>
                                <div className='merek-number'>20%</div>
                                <div className='merek-number'>30%</div>
                                <div className='merek-payment'>40%</div>
                            </div>
                            <div className='merek-chapter'>Tipe Asuransi</div>
                            <div  className='right-merek'>
                                <div className='merek-number'>Kombinasi</div>
                                <div className='merek-number'>All Risik</div>
                                <div className='merek-payment'>TLO</div>
                            </div>
                            <div className='merek-chapter'>Diskon</div>
                            <input className='merek-search'/>
                            <div className='merek-chapter'>sudah ada penawaran lain belum?</div>
                            <div  className='right-merek'>
                                <div className='merek-number'>sudah</div>
                                <div className='merek-number'>belum</div>
                                <div></div>
                            </div>
                            <div className='merek-chapter'>Leasing Lain (metode kreadit) *</div>
                            <div  className='right-merek'>
                                <div className='merek-number'>sudah</div>
                                <div className='merek-number'>belum</div>
                                <div></div>
                            </div>
                            <input className='merek-search'/>
                            <div className='merek-chapter'>Kunjungan Selanjutnya</div>
                            <div className='merek-chapter'>dd/mm/yyyy</div>
                            <div className='merek-foto'>
                                <img className='foto'/>
                                <button className='foto-tombol'>ambil foto</button>
                            </div>
                            <button className='merek-tombol'>seret draf</button>
                            <div className='merek-merek'>
                            <button className='merek-botton'>submit</button>
                            </div>
                           
                           
                        </div>
                    </div>

                </div>
            </div> 
        </div>

    );
}
export default Editprospek;