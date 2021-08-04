import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from '../../assets/search.svg'
import { useParams } from "react-router"
import { API_BASE } from '../../contants/API_BASE'
import MenuNavigator from '../../components/MenuNavigator'
import {
  Body,
  TitleContainer,
  RestaurantLogo
} from './style'

export function Profile() {
  const [user, setUser] = useState([])
  const history = useHistory();
  const pathParams = useParams()

  useEffect(() => {
    axios
      .get(
        `${API_BASE}profile`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        setUser(response.data.user)
        console.log(response.data.user)
      })
      .catch(() => { })
  }, [])

  const RestaurantPageHandle = () => {
    history.push('/restaurant')
  }

  return (
    <Body>
      <TitleContainer>
        <h1>Meu perfil</h1>
      </TitleContainer>
      <div>
        {user.name}
        {user.email}
        {user.cpf}
      </div>
      <div>
        <p>Endereço cadastrado</p>
        <p></p>
      </div>
      <div>
        <p>Histórico de pedidos</p>
      </div>
      <div>
        <p>Você não realizou nenhum pedido</p>
      </div>
      <MenuNavigator></MenuNavigator>
    </Body>
  )
}

export default Profile