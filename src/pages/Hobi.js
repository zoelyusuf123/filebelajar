function Hobi() {
    const hobies = [
        'music',
        'game',
        'IT',
        'hiking',
        'bola',
        'makan',
        'angkatbeban',
        'teveling',
    ];

  return(
        
        <nav className='hobi'>
        <ul class="tombol ">Hobi</ul>
        <div className='cover'>
          <div className="tbl-biru">Bermusik</div>
          {hobies.map((element) =>{
           return <ul className="tbl-biru">{element}</ul>
          })}
        </div>     
        </nav>
  );
    
}

export default Hobi;