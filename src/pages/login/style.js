import styled from "styled-components"
import DisplayFlexCenter from "../../themes/flexEffect"

export const Body = styled.body`
  height: 80vh;
`
export const ImageContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 5.5rem;
  padding-bottom: 1.75rem;
`
export const TitleContainer = styled.div`
  ${DisplayFlexCenter}
  
  p {
    font-size: 1rem;
  }
`
export const FormContainer = styled.div`
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
export const ButtonContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 0.5rem;
`
export const Button = styled.div`
  ${DisplayFlexCenter}
  width: 20.5rem;
  height: 2.625rem;
  border-radius: 2px;
  background-color: #e8222e;
`
export const RegisterContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 1.5rem;

  a {
    cursor: pointer;
  }
`