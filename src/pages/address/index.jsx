import React from 'react'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import useForm from '../../hooks/useForm'
import BackArrow from '../../assets/backArrow.svg'
import {
  Body,
  ImageContainer,
  TitleContainer,
  FormContainer,
  ButtonContainer,
  Button,
  NavBar
} from "./style";

export function Address() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "", confirmPassword: "" })
  const history = useHistory();

  const onSubmitSignup = (event, password, confirmPassword) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password dont match")
    }
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup`, form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        cleanFields()
        addAddressHandle()
      })
      .catch(() => { })
  }

  const goBack = () => {
    history.goBack();
  }

  const addAddressHandle = () => {
    history.push('/address')
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
            type="name"
          />
          <input
            name="number"
            value={form.number}
            onChange={onChange}
            placeholder={"Número"}
            required
            type="email"
          />
          <input
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            placeholder={"Apto. / Bloco"}
            required
          />
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            placeholder={"Mínimo 6 caracteres"}
            required
            type="password"
          />
          <input
            name="confirm"
            value={form.confirm}
            onChange={onChange}
            placeholder={"Confirme a senha anterior"}
            required
            type="password"
          />
          <input
            name="confirm"
            value={form.confirm}
            onChange={onChange}
            placeholder={"Confirme a senha anterior"}
            required
            type="password"
          />
          <ButtonContainer>
            <Button>
              <button>Criar</button>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Body>
  )
}

export default Address