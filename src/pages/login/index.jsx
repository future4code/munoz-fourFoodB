import React from 'react'
import styled from 'styled-components'
import MainLogo from '../../assets/ifuture-logo-red.svg'
import { useHistory } from "react-router-dom"
import DisplayFlexCenter from '../../themes/flexEffect'

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

export function Login() {
  const history = useHistory();

  return (
    <Body>
      <ImageContainer>
        <img src={MainLogo} />
      </ImageContainer>
      <TitleContainer>
        <p>Entrar</p>
      </TitleContainer>
      <FormContainer>
        <form>
          <input
            name="email"
            // value={props.form.email}
            // onChange={props.onChange}
            placeholder={"email@email.com"}
            required
            type="email"
          />
          <input
            name="password"
            // value={props.form.password}
            // onChange={props.onChange}
            placeholder={"Mínimo 6 caracteres"}
            required
            type="password"
          />
        </form>
      </FormContainer>
      <ButtonContainer>
        <Button>
          <span>Entrar</span>
        </Button>
      </ButtonContainer>
      <RegisterContainer>
        <span>
          Não possui cadastro? <a>Clique aqui.</a>
        </span>
      </RegisterContainer>
    </Body>
  )
}

export default Login