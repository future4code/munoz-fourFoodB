import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import {
  Body,
  TitleContainer,
  SearchContainer,
  NavContainer
} from './style'

export function Feed() {
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch(() => { })
  }, [])

  return (
    <Body>
      <TitleContainer>
        <h1>Ifuture</h1>
      </TitleContainer>
      <SearchContainer>
        <img src={Search}></img>
        <input
          type="text"
          placeholder="Restaurante"
        />
      </SearchContainer>
      <NavContainer>
        <div>Burger</div>
        <div>Japonesa</div>
        <div>Mexicana</div>
        <div>Brasileira</div>
        <div>Brasileira</div>
        <div>Brasileira</div>
        <div>Brasileira</div>
        <div>Brasileira</div>
      </NavContainer>
    </Body>
  )
}

export default Feed