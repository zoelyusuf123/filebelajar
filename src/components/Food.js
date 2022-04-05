function Makanan() {
    const food =[
        'pindang',
        'pepes',
        'gorengan', 
         'bubur',
         'juice',
         'geprek',
         'lontong',
         'perkedel',
         
        ];
    return(
        <nav className='lengt'>
        <ul class=" tombol "> makanan favorit </ul>
        <div className='cover'>
        {food.map((element) =>{
           return <ul className="tbl-biru">{element}</ul>
          })}
          </div>
         </nav>
         
    )    
}
export default Makanan;