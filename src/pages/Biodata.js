import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";

function Biodata() {
  const navigate = useNavigate();
  const [playerNames, setPlayerNames] = useState([]);
  const [data, setData] = useState([]);
  const getNames = () => {
    axios
      .get("https://equran.id/api/surat")
      .then((response) => {
        setData(response?.data);
        console.log(response?.data);
      }) 
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNames();
  }, []);
  return (
    <section className="container">
      <div className="header">
        <img src="https://img.freepik.com/free-vector/muslim-couple-reading-studying-quran-during-ramadan-kareem-holy-month-illustration_138260-707.jpg?size=626&ext=jpg&ga=GA1.2.1172984092.1646231705" alt="" className="gambar" />
        <div>ALQURAN</div>
        <input className="input-search" type="search" placeholder="search" onChange={e=>setPlayerNames(e.target.value)}></input>
        <button onClick={e => getNames(e)}>searchNames</button>
        <button className="text-button">Menu</button>
        <button className="text-button">about</button>
        <button className="text-button" href='#contac'>contact</button>
      </div>
      <div className="decoration">
        <div className="ayat">
          <div className="ayat-arti">ARTINYA</div>
          {data.map((e) => (
            <div>{e.arti}</div>
          ))}
        </div>
        <div className="ayat">
          <div className="colum">JUMLAH AYAT</div>
          {data.map((e) => (
            <div>{e.jumlah_ayat}</div>
          ))}
        </div>
        <div className="ayat">
          <div className="colum">NAMA SURAT</div>
          {data.map((e) => (
            <div>{e.nama}</div>
          ))}
        </div>
        <div className="ayat">
          <div className="colum">NO</div>
          {data.map((e) => (
            <div>{e.nomor}</div>
          ))}
        </div>
      </div>
      <footer className="foot">
        <div>
          <div>ALQURAN TERJEMAH</div>
          <div>SILAHAKAN PESAN DI</div>
          <div>081617008122</div>
        </div>
      </footer>
    </section>
  );
}

export default Biodata;
