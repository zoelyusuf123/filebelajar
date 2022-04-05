function Navbar() {
    return(
        <div>
        <div className='kolom'>
         <ul className='data'>Biodata Diri</ul>
         <ul className='elemen' >
            <li>nama: </li> 
            <li>nama panggilan: </li>
            <li>Tempat, Tanggal Lahir:</li>
            <li>Pendidikan Terakhir:</li>
            <li>Status Pernikahan:</li>
         </ul>
         <ul className='biodata'>
         <p>M.Zulhiyandi Yusuf</p>
         <p>Yandi</p>
         <p>Bandar Lampung 05 April 1998</p>
         <p>S1 Pendidikan Matematika</p>
         <p>Belum Menikah</p>
        </ul>
        </div>
      </div>
    );
}

export default Navbar;