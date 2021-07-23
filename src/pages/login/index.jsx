import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"

const Body = styled.body`
  height: 80vh;
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.5rem;
  padding-bottom: 1.75rem;
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`

export function Login() {
  const history = useHistory();

  return (
    <Body>
      <ImageContainer>
        <img src={MainLogo} />
      </ImageContainer>
      <TitleContainer>
        <h1>Entrar</h1>
      </TitleContainer>
    </Body>
  )
}

export default Login