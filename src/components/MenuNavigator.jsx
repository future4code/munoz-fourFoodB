import React from 'react'
import styled from 'styled-components'
import HomeSVG from '../assets/home-red.svg'
import CartSVG from '../assets/cart.svg'
import AvatarSVG from '../assets/avatar.svg'
import { useHistory } from "react-router-dom"

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
  const history = useHistory();

  const goToFeed = () => {
    history.push("/feed");
  }
  const goToCart = () => {
    history.push("/cart");
  }
  const goToProfile = () => {
    history.push("/profile");
  }

  return (
    <MenuContainer>
      <div>
        <img src={HomeSVG} onClick={goToFeed}></img>
      </div>
      <div>
        <img src={CartSVG} onClick={goToCart}></img>
      </div>
      <div>
        <img src={AvatarSVG} onClick={goToProfile}></img>
      </div>
    </MenuContainer>
  )
}

export default MenuNavigator