import React from 'react'
import MainLogo from '../../assets/ifuture-logo-white.svg'
import { useHistory } from "react-router-dom"
import { Body } from "./style";

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