import './formulario.css'

const Formulario = () => {
    return (
        <div className="container__formulario">
            <form className='form'>
                <div className='form__div'>
                    <div className="container__day inputs">
                        <label htmlFor="day">DAY</label>
                        <input type="number" placeholder="DD" maxLength={2} />
                        <span className='mensagem__erro'></span>
                    </div>
                    <div className="container__month inputs">
                        <label htmlFor="month">MONTH</label>
                        <input type="number" placeholder="MM" maxLength={2}/>
                        <span className='mensagem__erro'></span>
                    </div>
                    <div className="container__year inputs">
                        <label htmlFor="year">YEAR</label>
                        <input type="number" placeholder="YYYY" maxLength={4}/>
                        <span className='mensagem__erro'></span>
                    </div>
                </div>

                <button type='submit' className='botao'><img src="icon.png" alt="Foto"  className='imagem'/></button>
            </form>
           
        </div>  
    )
}

export default Formulario