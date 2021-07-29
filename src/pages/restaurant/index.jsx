import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { useParams } from "react-router"
import { API_BASE } from '../../contants/API_BASE'
import {
  Body,
  TitleContainer,
  CardContainer,
  RestaurantCard,
  MenuContainer,
  RestaurantsContainer,
  CardInfosContainer,
  CardInfos
} from './style'

export function Restaurant() {
  const [restaurant, setRestaurant] = useState([])
  const history = useHistory();
  const pathParams = useParams()

  useEffect(() => {
    axios
      .get(
        `${API_BASE}restaurants/${pathParams.id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        setRestaurant(response.data.restaurant)
      })
      .catch(() => { })
  }, [])

  const RestaurantPageHandle = () => {
    history.push('/restaurant')
  }

  console.log(restaurant)

  return (
    <Body>
      <TitleContainer>
        <h1>Restaurante</h1>
      </TitleContainer>
      
      <MenuContainer>

      </MenuContainer>
    </Body>
  )
}

export default Restaurant