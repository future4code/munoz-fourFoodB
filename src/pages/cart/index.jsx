import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { API_BASE } from '../../contants/API_BASE'
import MenuNavigator from '../../components/MenuNavigator'
import { GlobalContext } from '../../App'
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


export function Cart() {
  const cartContext = useContext(GlobalContext)
  const restaurantContext = useContext(GlobalContext)
  const [address, setAddress] = useState([])
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${API_BASE}profile/address`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        setAddress(response.data.address)
        console.log(response)
      })
      .catch(() => { })
  }, [])

  const RestaurantPageHandle = (id) => {
    history.push(`/restaurant/${id}`)
  }

  return (
    <Body>
      <TitleContainer>
        <h1>Meu carrinho</h1>
      </TitleContainer>
      <div>
        <p>Endereço de entrega</p>
        <p>{address.street}, {address.number}</p>
      </div>
      <div>
        {cartContext.cart.map((items) => {
          return (
            <div>
              {items.name} x {items.quantity}
            </div>
          )
        })}
      </div>
      <div>
        <p>Carrinho vazio</p>
      </div>
      <div>
        <p>Frete R$0,00</p>
      </div>
      <div>
        <p>
          SUBTOTAL
        </p>
        <p>
          <p>R$00.00</p>{/* Contador do valor total */}
        </p>
      </div>
      <div>
        <p>Forma de pagamento</p>
      </div>
      <div>
        <form>
          <input type="radio" id="cash" name="fav_language" value="CASH" />
          <label for="cash">Dinheiro</label>
          <input type="radio" id="card" name="fav_language" value="CARD" />
          <label for="card">Cartão de crédito</label>
        </form>
      </div>
      <div>
        <button disabled={true}>Confirmar</button>
      </div>
      <MenuNavigator></MenuNavigator>
    </Body >
  )
}

export default Cart