import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"
import DisplayFlexCenter from '../../themes/flexEffect'
import axios from 'axios'
import useForm from '../../hooks/useForm'

const Body = styled.body`
  height: 80vh;
`
const ImageContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 5.5rem;
  padding-bottom: 1.75rem;
`
const TitleContainer = styled.div`
  ${DisplayFlexCenter}
  
  p {
    font-size: 1rem;
  }
`
const FormContainer = styled.div`
  ${DisplayFlexCenter}

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 1.1rem;
    width: 18rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`
const ButtonContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 0.5rem;
`
const Button = styled.div`
  ${DisplayFlexCenter}
  width: 20.5rem;
  height: 2.625rem;
  border-radius: 2px;
  background-color: #e8222e;
`
const RegisterContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 1.5rem;
`

export function Signup() {
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
          Não possui cadastro? <a>Clique aqui.</a>
        </span>
      </RegisterContainer>
    </Body>
  )
}

export default Signup