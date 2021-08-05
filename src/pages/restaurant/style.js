import styled from "styled-components"
import DisplayFlexCenter from "../../themes/flexEffect"

export const Body = styled.div`
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
export const RestaurantLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100vw;
  border-radius: 20px 25em 0 0;

  img {
    width: 20.5rem;
    height: 7.5rem;
    border-radius: 8px 8px 0 0;
    object-fit: contain;
  }
`
export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const CardContainer = styled.div`
  width: 20.5rem;
  height: 7.5rem;
  margin-bottom: 25px;
  border-radius: 8px;
  border: solid 1px black;
`
export const InfoContainer = styled.div`
  width: 20.5rem;
  height: 7rem;
  border-radius: 8px;
`
export const ProductCards = styled.div`
  display: flex;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 6rem;
  height: 7rem;
  border-radius: 8px;
  background-color: #d8d8d8;

  img {
    width: 6rem;
    height: 7rem;
    object-fit: fill;
  }
`
export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5.625rem;
  height: 1.938rem;
  border-top-left-radius: 8px 8px;
  border-top: solid 1px black;
  border-left: solid 1px black;
  margin-top: 2px;
`