import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color:#FFF;
    display:block;
    margin:15px 0;
    font-family:"Lato",sans-serif;
    font-size:20px;
    font-weight:700;
`
const Select = styled.select`
    margin-bottom:10px;
    padding:7px;
    border-radius:3px;
    width:100%;
    border:none;
    font-size:15px;
`

function useSelectCurrency(label,monedas) {
    const [state,setState] = useState("")

    const SelectCurrency = ()=>(
        <>
        <Label>{label}</Label>
        <Select value={state} onChange={e => setState(e.target.value)}>
            <option value="">Seleccionar</option>
            {monedas.map(moneda =>(
                <option key={moneda.id} value={moneda.id}>
                    {moneda.nombre}
                </option>
            ))}
        </Select>
        </>
    )

    return[state,SelectCurrency]
}

export default useSelectCurrency