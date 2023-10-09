import { useState } from 'react'
import MostraIdade from '../MostraIdade'
import Formulario from '../formulario'
import './Main.css'

const Main = () => {
    const [subtracao, setSubtracao] = useState(0)

    const handleSubtracao = (resultado) => {
        setSubtracao(resultado)
    }

    return (
        <main className='container__main'>
            <section className='container__section'>
                <div>
                    <Formulario handleSubtracao={handleSubtracao} />
                </div>
                <div>
                    <MostraIdade resultadoSubtracao={subtracao} />
                </div>
            </section>
        </main>
    )
}

export default Main
