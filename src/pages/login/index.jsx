import React from 'react'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import useForm from '../../hooks/useForm'
import {
  Body,
  ImageContainer,
  TitleContainer,
  FormContainer,
  ButtonContainer,
  Button,
  RegisterContainer
} from "./style";

export function Login() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`, form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        cleanFields()
        // if (response.data.user.hasAddress === false) {

        // }
      })
      .catch(() => { })
  }

  const signupHandle = () => {
    history.push('/signup')
  }

  return (
    <Body>
      <ImageContainer>
        <img src={MainLogo} />
      </ImageContainer>
      <TitleContainer>
        <p>Entrar</p>
      </TitleContainer>
      <FormContainer>
        <form onSubmit={onSubmitLogin}>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={"email@email.com"}
            required
            type="email"
          />
          <input
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder={"Mínimo 6 caracteres"}
            required
            type="password"
          />
          <ButtonContainer>
            <Button>
              <button>Entrar</button>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
      <RegisterContainer>
        <span>
          Não possui cadastro? <a onClick={signupHandle}>Clique aqui.</a>
        </span>
      </RegisterContainer>
    </Body>
  )
}

export default Login