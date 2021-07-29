import React from 'react'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import useForm from '../../hooks/useForm'
import BackArrow from '../../assets/backArrow.svg'
import { API_BASE } from '../../contants/API_BASE'
import {
  Body,
  ImageContainer,
  TitleContainer,
  FormContainer,
  ButtonContainer,
  Button,
  NavBar
} from "./style";

export function Signup() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "", confirmPassword: "" })
  const history = useHistory();

  const onSubmitSignup = (event, password, confirmPassword) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password dont match")
    }
    axios
      .post(
        `${API_BASE}signup`, form
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
        <img src={BackArrow} onClick={goBack}/>
      </NavBar>
      <ImageContainer>
        <img src={MainLogo} />
      </ImageContainer>
      <TitleContainer>
        <p>Cadastrar</p>
      </TitleContainer>
      <FormContainer>
        <form onSubmit={onSubmitSignup}>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome e sobrenome"}
            required
            type="name"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={"email@email.com"}
            required
            type="email"
          />
          <input
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            placeholder={"000.000.000-00"}
            required
          />
          <input
            name="password"
            value={form.password}
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

export default Signup