import styled from 'styled-components'

export const Wrapper = styled.div`
min-height: 100vh;
`

export const MainContainer = styled.div`
min-height: 91vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
overflow: hidden;
position: relative;
`

export const ProductGrid = styled.div`
width: 1200px;
min-width: 850px;
min-height: 75%;
display: flex;
flex-wrap: wrap;
gap: 2%;
row-gap: 10px;
justify-content: center;

@media(max-width: 900px){
 min-width:300px;
 flex-direction: column;
 align-items: center;
}
`

export const LoadingContainer = styled.div`
width: 1200px;
min-width: 850px;
min-height: 75%;
display: flex;
justify-content: center;


@media(max-width: 900px){
 min-width:300px;
 flex-direction: column;
 align-items: center;
}
`
