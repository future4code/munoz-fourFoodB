import styled from "styled-components"
import DisplayFlexCenter from "../../themes/flexEffect"

export const Body = styled.div`
  height: 80vh;
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 4rem;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`
export const ImageContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 1.5rem;
  padding-bottom: 1.75rem;
`
export const TitleContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 1rem;
  
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