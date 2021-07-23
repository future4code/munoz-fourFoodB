import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/ifuture-logo-white.svg'
import { useHistory } from "react-router-dom"

const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e8222e;
`

export function Home() {
  const history = useHistory();

  const loginPageHandle = () => {
    history.push('/login')
  }

  return (
      <Body>
        <div onClick={loginPageHandle}><img src={MainLogo} /></div>
      </Body>
  )
}

export default Home