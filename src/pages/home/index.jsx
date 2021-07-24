import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/ifuture-logo-white.svg'
import { useHistory } from "react-router-dom"
import DisplayFlexCenter from '../../themes/flexEffect'

const Body = styled.body`
  ${DisplayFlexCenter};
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