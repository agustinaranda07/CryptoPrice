import styled from "@emotion/styled"
import img from "./img/crypto.jpg"
import Form from "./Components/Form"
import useSelectCurrency from "./Hooks/useSelectCurrency"
import { useState, useEffect } from "react"

const Container = styled.div`
max-width: 900px;
margin:0 auto;
width:90%;
@media (min-width:992px){
  display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap:2rem;
}
`
const Imagen = styled.img`
max-width:500px;
width:100%;
height:100%;
margin:100px auto 0 auto;
display:block;
background-color:transparent;
`
const Heading = styled.h1`
font-family: "Lato",sans-serif;
color: #FFF;
margin-top:100px;
text-align:center;
font-weight:700;
font-size:40px;
margin-bottom:40px;

&::after{
  content:"";
  width:100px;
  height:6px;
  background-color:#f3b866;
  display:block;
  margin:10px auto 0 auto;
}
`
const Criptos = styled.span`
  color: #f3b866;
`

function App() {

  const [monedas,setMonedas] = useState({})
  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      console.log(monedas)
    }
  },[monedas])

  return (
  <Container>
    <Imagen src={img} alt="criptomonedas"/>
    <div>
    <Heading>Cotiza tus <Criptos>criptos</Criptos> al instante</Heading>
    <Form setMonedas={setMonedas}/>
    </div>
  </Container>
  )
}

export default App
