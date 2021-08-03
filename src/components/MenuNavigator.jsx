import React from 'react'
import styled from 'styled-components'
import HomeSVG from '../assets/home-red.svg'
import CartSVG from '../assets/cart.svg'
import AvatarSVG from '../assets/avatar.svg'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #FFF;
  color: white;
  border-top: 1px solid #b8b8b8;

  div {
    width: 7.5rem;
    display: flex;
    justify-content: center;
  }
`

export function MenuNavigator() {

  return (
    <MenuContainer>
      <div>
        <img src={HomeSVG}></img>
      </div>
      <div>
        <img src={CartSVG}></img>
      </div>
      <div>
        <img src={AvatarSVG}></img>
      </div>
    </MenuContainer>
  )
}

export default MenuNavigator