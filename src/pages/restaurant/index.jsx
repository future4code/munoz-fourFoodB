import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { useParams } from "react-router"
import { API_BASE } from '../../contants/API_BASE'
import {
  Body,
  TitleContainer,
  RestaurantLogo,
  ProductCards,
  ImageContainer,
  CardContainer,
  ProductsContainer,
  ButtonContainer,
  Teste,
  InfoContainer
} from './style'

export function Restaurant() {
  const [restaurant, setRestaurant] = useState([])
  const [products, setProducts] = useState([])
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
        setProducts(response.data.restaurant.products)
      })
      .catch(() => { })
  }, [])

  const RestaurantPageHandle = () => {
    history.push('/restaurant')
  }

  console.log(products)

  return (
    <Body>
      <TitleContainer>
        <h1>Restaurante</h1>
      </TitleContainer>
      <RestaurantLogo>
        <img src={restaurant.logoUrl}></img>
      </RestaurantLogo>
      <div>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.category}</h1>
        <h1>{restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min</h1>
        <h1>Frete R${restaurant.shipping},00</h1>
        <h1>{restaurant.address}</h1>
      </div>
      <ProductsContainer>
        <h1>Principais</h1>
        {products.map((product) => {
          return (
            <CardContainer>
              <ProductCards>
                <ImageContainer>
                  <img src={product.photoUrl}></img>
                </ImageContainer>
                <InfoContainer>
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <Teste>
                    <p>{product.price}</p>
                    <ButtonContainer>
                      <p>Adicionar</p>
                    </ButtonContainer>
                  </Teste>
                </InfoContainer>
              </ProductCards>
            </CardContainer>
          )
        })}
      </ProductsContainer>
    </Body>
  )
}

export default Restaurant