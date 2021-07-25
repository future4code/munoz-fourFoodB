import styled from "styled-components"
import DisplayFlexCenter from "../../themes/flexEffect"

export const Body = styled.body`
  height: 80vh;
`
export const TitleContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);

  h1 {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`
export const ImageContainer = styled.div`
  ${DisplayFlexCenter}
  margin-top: 1.5rem;
  padding-bottom: 1.75rem;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem 0.5rem 1rem;
  height: 1.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px black;

  img {
    padding-right: 1rem;
  }

  input {
    border: none;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    width: 17rem;
    height: 1.2rem;
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