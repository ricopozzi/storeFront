import styled from 'styled-components'
import { HTMLAttributes } from 'react'


export const AsideContainer = styled.aside<any>`
    position: fixed;
    top: 0;
    right: ${(props) => props.cartState === true ? '0 ': '-120%' };
	  height: 100%;
	  width: 27%;
    min-width: 450px;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    transition: 300ms ease-in-out;

    @media(max-width: 900px) {
        width: 100%;
    }

    h1 {
        font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    width: 180px;
    height: 56px;
    color: #FFFFFF;
    margin-left: 47px;
    margin-top: 37px;
    }
`

export const CloseButton = styled.div`
   position: absolute;
   top: 47px;
   right: 33px;
   width: 39px;
   height: 39px;
   border-radius: 999999px;
   background: #000;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 22px;
   color:#fff;
   cursor: pointer;

    
    `

export const ProductsContainer = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  height: 65%;
  width: 90%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fafafaaa;
  border-radius: 10px;
}
`

export const ResultContainer =  styled.div`
  margin-left: 47px;
  margin-right: 50px;
  font-weight: 700;
  font-size: 28px;
  color:#fff;
  display: flex;
  justify-content: space-between;

`

export const FinalizeContainer =  styled.div`
width: 100%;
height: 10%;
margin-top: 10px;
background: #000;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 28px;
line-height: 15px;
cursor: pointer;

color: #FFFFFF;

`