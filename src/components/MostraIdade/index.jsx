import './MostraIdade.css'

const MostraIdade = ({ resultadoSubtracao }) => {
    return (
       <section className='container'>
                    <h2 className='years'>{ resultadoSubtracao }</h2>
                    <h2 className='years__h2'>years</h2>
       </section>
    )
}

export default MostraIdade