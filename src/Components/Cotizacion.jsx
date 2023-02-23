import React from 'react'
import styled from '@emotion/styled'

const Resultados = styled.p`
    font-family:"Lato",sans-serif;
    margin:15px 0;
    color: #FFF;
    font-weight:400;
    font-size:17px;
`
const Precio = styled.p`
    font-family:"Lato",sans-serif;
    color: #FFF;
    font-size:25px;
    span{
        color: #f3b866;
        font-weight:700;
    }
`
const Imagen = styled.img`
    width:115px;
`

const Container = styled.div`
    margin-top:20px;
    display:flex;
    align-items:center;
    gap:1rem;
`

function Cotizacion({cotizado}) {
    const {PRICE,LASTUPDATE,HIGHDAY,LOWDAY,IMAGEURL} = cotizado
  return (
    <Container>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="cripto" />
        <div>
        <Precio>Precio actual: <span>{PRICE}</span></Precio>
        <Resultados>Precio más alto del día: {HIGHDAY}</Resultados>
        <Resultados>Precio más bajo del día: {LOWDAY}</Resultados>
        <Resultados>Última actualización de precio: {LASTUPDATE}</Resultados>
        </div>
    </Container>
  )
}

export default Cotizacion