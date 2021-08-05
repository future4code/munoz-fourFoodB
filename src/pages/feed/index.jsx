import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { API_BASE } from '../../contants/API_BASE'
import MenuNavigator from '../../components/MenuNavigator'
import {
  Body,
  TitleContainer,
  SearchContainer,
  NavContainer,
  CardContainer,
  RestaurantCard,
  RestaurantsContainer,
  CardInfosContainer,
  CardInfos
} from './style'

export function Feed() {
  const [restaurants, setRestaurants] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${API_BASE}restaurants`,
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

  const RestaurantPageHandle = (id) => {
    history.push(`/restaurant/${id}`)
  }

  const searchRestaurant = (event) => {
    setInputSearch(event.target.value)
  };

  const filterRestaurant = restaurants.filter((restaurant) => {
    if (restaurant.name.includes(inputSearch)) {
      return true
    } else {
      return false
    }
  })

  return (
    <Body>
      <TitleContainer>
        <h1>Ifuture</h1>
      </TitleContainer>
      <SearchContainer>
        <img src={Search}></img>
        <input
          type="text"
          value={inputSearch}
          onChange={searchRestaurant}
          placeholder="Restaurante">
        </input>
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
        {filterRestaurant.map((restaurant) => (
          <CardContainer>
            <RestaurantCard onClick={() => RestaurantPageHandle(restaurant.id)}>
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
      <MenuNavigator />
    </Body>
  )
}

export default Feed