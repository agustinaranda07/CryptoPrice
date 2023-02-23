import React from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../Hooks/useSelectCurrency'
import monedas from "../data/monedas"
import { useEffect,useState } from 'react'

const Submit = styled.input`
    background-color:#f3b866;
    border:none;
    width:100%;
    padding: 10px;
    margin:15px 0;
    border-radius:4px;
    color:#FFF;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    transition: background-color .3s ease;
    &:hover{
        cursor: pointer;
        background-color:#cf9d58;
    }
`
const Error = styled.p`
    font-family:"Lato",sans-serif;
    font-size:18px;
    font-weight:700;
    text-align:center;
    background-color:#D0342C;
    padding:10px;
    border-radius:3px;
`

function Form({setMonedas}) {
    const [cripto,setCripto] = useState([])
    const [error,setError] = useState(false)

    const [monedaState,SelectCurrency] = useSelectCurrency("Seleccione una moneda",monedas)
    const [criptoState,SelectCripto] = useSelectCurrency("Seleccione una criptomoneda",cripto)

    useEffect(()=>{
        const getAPI = async()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
            const answer = await fetch(url)
            const getAnswer = await answer.json()

            const arrayOfCryptos = getAnswer.Data.map(crypto =>{
                const objCryptos ={
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objCryptos
            })
            setCripto(arrayOfCryptos)
        }
        getAPI();
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        if([monedaState,criptoState].includes("")){
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            monedaState,
            criptoState
        })
}

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handleSubmit}>
            <SelectCurrency/>
            <SelectCripto/>
            <Submit type="submit" value="Cotizar" />
        </form>
    </>
  )
}

export default Form