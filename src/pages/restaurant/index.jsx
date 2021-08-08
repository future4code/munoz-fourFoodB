import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { useParams } from "react-router"
import { API_BASE } from '../../contants/API_BASE'
import { GlobalContext } from '../../App'
import BackArrow from '../../assets/backArrow.svg'
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
  const cartContext = useContext(GlobalContext)
  const [products, setProducts] = useState([])
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
        setProducts(response.data.restaurant.products)
      })
      .catch(() => { })
  }, [])

  const goBack = () => {
    history.goBack();
  }

  const RestaurantPageHandle = () => {
    history.push('/restaurant')
  }

  const AddToCart = (product) => {
    const inCart = cartContext.cart.find((productInCart) => {
      if (productInCart.id === product.id) {
        return true
      }
      return false
    })

    if (inCart) {
      console.log("Está no carrinho")
      const newCart = cartContext.cart.map((productIncart) => {
        if (productIncart.id === product.id) {
          return {
            ...productIncart,
            quantity: productIncart.quantity + 1
          }
        }

        return productIncart
      })

      cartContext.setCart(newCart)

    } else {
      console.log("Não está no carrinho")
      const productQuantity = {
        ...product,
        quantity: 1
      }
      const newCart = [...cartContext.cart, productQuantity]
      cartContext.setCart(newCart)
    }
  }

  console.log("Carrinho", cartContext.cart)
  console.log("produtos", products)

  return (
    <Body>
      <>
        <img src={BackArrow} onClick={goBack} />
      </>
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
                    <ButtonContainer onClick={() => AddToCart(product)}>
                      Adicionar
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