import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import {
  Body,
  TitleContainer,
  SearchContainer,
  NavContainer,
  CardContainer,
  RestaurantCard,
  MenuContainer,
  RestaurantsContainer,
  CardInfosContainer,
  CardInfos
} from './style'

export function Feed() {
  const [restaurants, setRestaurants] = useState([])
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
        setRestaurants(response.data.restaurants)
      })
      .catch(() => { })
  }, [])

  console.log(restaurants)

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
      <RestaurantsContainer>
        {restaurants.map((restaurant) => (
          <CardContainer>
            <RestaurantCard>
              <CardInfosContainer>
                <img src={restaurant.logoUrl} />
                <CardInfos>
                  <span>{restaurant.name}</span>
                  <div>
                    <span>
                      {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
                    </span>
                    <span>
                      Frete R${restaurant.shipping},00
                    </span>
                  </div>
                </CardInfos>
              </CardInfosContainer>
            </RestaurantCard>
          </CardContainer>
        ))}
      </RestaurantsContainer>
      <MenuContainer>

      </MenuContainer>
    </Body>
  )
}

export default Feed