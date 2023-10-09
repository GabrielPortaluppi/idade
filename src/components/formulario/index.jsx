import { useForm } from 'react-hook-form'
import './formulario.css'
import { useEffect, useState } from 'react'

const Formulario = ({ handleSubtracao }) => {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear())
    const [resultadoSubtracao, setResultadoSubtracao] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const resultado = year - anoAtual
        setResultadoSubtracao(resultado)
        handleSubtracao(resultadoSubtracao)
    }

    useEffect(() => {
    }, [resultadoSubtracao])

    return (
        <div className="container__formulario">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form__div'>
                    <div className="container__day inputs">
                        <label htmlFor="day">DAY</label>
                        <input
                            type="number"
                            placeholder="DD"
                            maxLength={2}
                            {...register("date", { required: true, maxLength: 2 })}
                            onChange={(e) => setDay(e.target.value)}
                        />
                        {errors?.date?.type === "required" && <span className='mensagem__erro'>
                                Campo não pode estar vazio!
                        </span>}

                        {errors?.date?.type === "maxLength" && <span className='mensagem__erro'>
                                O campo deve conter pelo menos 2 números!
                        </span>}
                    </div>
                    <div className="container__month inputs">
                        <label htmlFor="month">MONTH</label>
                        <input
                            type="number"
                            placeholder="MM"
                            maxLength={2}
                            {...register("month", { required: true, maxLength: 2 })}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        {errors?.month?.type === "required" && <span className='mensagem__erro'>
                                Campo não pode estar vazio!
                        </span>}

                        {errors?.month?.type === "maxLength" && <span className='mensagem__erro'>
                                O campo deve conter pelo menos 2 números!
                        </span>}
                    </div>
                    <div className="container__year inputs">
                        <label htmlFor="year">YEAR</label>
                        <input
                            type="number"
                            placeholder="YYYY"
                            maxLength={4}
                            {...register("year", { required: true, maxLength: 4 })}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        {errors?.year?.type === "required" && <span className='mensagem__erro'>
                                Campo não pode estar vazio!
                        </span>}

                        {errors?.year?.type === "maxLength" && <span className='mensagem__erro'>
                                O campo deve conter pelo menos 4 números!
                        </span>}
                   </div> 
                    </div> 
                        <button     
                            type='submit'
                             className='botao'>
                                <img src="icon.png" alt="Foto"  className='imagem'/>
                        </button> 
                </form> 
            </div> ) } 

export default Formulario