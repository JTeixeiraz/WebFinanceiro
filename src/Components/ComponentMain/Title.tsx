import '../mainp.css';
function Title(){
    var numero = 0;
    var gastos = 0;
    var lucros = 0;
    
    return(
        <div id='containercards'>
            <div className='card'>
                <h1 className='text-black'>Lucros: </h1>
                <h1 className='text-green-800 text-2xl'>{lucros}</h1>
            </div>
            <div className='card'>
                <h1 className='text-black'>Gastos: </h1>
                <h1 className='text-red-500 text-2xl'>{gastos}</h1>
            </div>
            <div className='card'>
                <h1 className='text-black'>Saldo: </h1>
                <h1 className='text-black text-2xl'>{numero}</h1>
            </div>
        </div>
    )
}

export default Title;