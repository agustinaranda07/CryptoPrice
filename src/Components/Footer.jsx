import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
@media(min-width: 992px){
    position:absolute;
    bottom:0;
}
    display:flex;
    margin-top:30px;
    width:100%;
    height:5vh;
    justify-content:center;
    background-color:#0f141a;
`

const Texto = styled.p`
    font-family: "Lato",sans-serif;
    color: #FFF;
`
const Link = styled.a`
    text-decoration:none;
    color: #f3b866;
`

function Footer() {
  return (
    <Container>
        <Texto>Sitio web desarrollado por <Link href="https://agustindev.netlify.app/" target="_blank">Agustin Aranda</Link></Texto>
    </Container>
  )
}

export default Footer