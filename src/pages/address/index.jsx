import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import BackArrow from '../../assets/backArrow.svg'
import { API_BASE } from '../../contants/API_BASE'
import {
  Body,
  TitleContainer,
  FormContainer,
  ButtonContainer,
  Button,
  NavBar
} from './style'

export function Address() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "", confirmPassword: "" })
  const history = useHistory();

  const onSubmitSignup = (event) => {
    event.preventDefault();
    axios
      .put(
        `${API_BASE}address`, form,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        cleanFields()
        localStorage.setItem("token", response.data.token)
        //funcao de ir para tela do feed
      })
      .catch(() => { })
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <Body>
      <NavBar>
        <img src={BackArrow} onClick={goBack} />
      </NavBar>
      <TitleContainer>
        <p>Meu endereço</p>
      </TitleContainer>
      <FormContainer>
        <form onSubmit={onSubmitSignup}>
          <input
            name="street"
            value={form.street}
            onChange={onChange}
            placeholder={"Rua / Av."}
            required
          />
          <input
            name="number"
            value={form.number}
            onChange={onChange}
            placeholder={"Número"}
            required
          />
          <input
            name="complement"
            value={form.complement}
            onChange={onChange}
            placeholder={"Apto. / Bloco"}
          />
          <input
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            placeholder={"Bairro"}
            required
          />
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            placeholder={"Cidade"}
            required
          />
          <input
            name="state"
            value={form.state}
            onChange={onChange}
            placeholder={"Estado"}
            required
          />
          <ButtonContainer>
            <Button>
              <button>Salvar</button>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Body>
  )
}

export default Address