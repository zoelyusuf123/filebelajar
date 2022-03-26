
import './App.css';
function App() {


  return(
    <div>
      <nav>
        <ul className='wraper'>
          <h6 className='logo'>M. ZULHIYANDI YUSUF</h6>
        </ul>
      </nav>
      <div>
        <div className='kolom'>
         <ul className='data'>Biodata Diri</ul>
         <ul>
            <p>nama: </p>
            <p>M.Zulhiyandi Yusuf</p>
            <li>nama panggilan: </li>
            <li>Tempat, Tanggal Lahir:</li>
            <li>Pendidikan Terakhir:</li>
            <li>Status Pernikahan:</li>
         </ul>
          <ul>
            
            <li>Yandi</li>
            <li>Bandar Lampung 05 April 1998</li>
            <li>S1 Pendidikan Matematika</li>
            <li>Belum Menikah</li>
         </ul>
        </div>
      </div>
        <nav className='hobi'>
        <ul class="tombol ">Hobi</ul>
        <div className='cover'>
          <div className="tbl-biru">Bermusik</div>
          <ul className="tbl-biru">Game</ul>
          <ul className="tbl-biru">Sepakbola</ul>
          <ul className="tbl-biru">Anime</ul>
          <ul className="tbl-biru">Traveling</ul>
          <ul className="tbl-biru">Moto GP</ul>
          <ul className="tbl-biru">Baca Buku</ul>
          <ul className="tbl-biru">Berenang</ul>
          </div>
        </nav>
      <nav className='lengt'>
        <ul class=" tombol "> makanan favorit </ul>
        <div className='cover'>
          <ul className="tbl-biru">sop</ul>
          <ul className="tbl-biru">pindang</ul>
          <ul className="tbl-biru">jengkol</ul>
          <ul className="tbl-biru">tahu</ul>
          <ul className="tbl-biru">rendang</ul>
          <ul className="tbl-biru">jus</ul>
          <ul className="tbl-biru">sate</ul>
          <ul className="tbl-biru">gulai </ul>
          </div>
        </nav>
        <ul className='bawah'>
          <ul>Hubungi: </ul>
          <ul>zulhiyandiyusuf@gmail.com</ul>
        </ul>

  
    </div>
    );
}
export default App;
