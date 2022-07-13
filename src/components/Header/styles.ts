import  styled from 'styled-components'

export const MainContainer = styled.header`
height: 9vh;
background: #0F52BA;
padding: 0 65px 0 65px;
display: flex;
justify-content: space-between;

@media(max-width: 800px) {
    padding: 0 30px 0 30px;
}

`

export const Image = styled.img`
width: 19px;
height: 19px;
object-fit: contain;
`

export const Logo = styled.div`
font-weight: 600;
font-size: 40px;
margin: 0;
display: flex;
align-items: center;

h1{
    margin: 0;
    font-size: 40px;
    color: #fff
}
p {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-left: 8px;
    margin-top: 30px;
    
}

@media(max-width:900px){
    h1 {
        font-size: 30px;
    }
    p {
        font-size: 15px;
    }
}
`

export const Cart = styled.div`
width: 90px;
height: 45px;
background: #ffffff;
border-radius: 8px;
margin: auto 0%;
display: flex;
align-items: center;
padding: 0 15px;
justify-content: space-evenly;
cursor: pointer;

p{
    font-weight: 700;
    font-size: 18px;
}

@media(max-width:900px){
    width: 80px;
    height: 37px;
    padding: 0 9px;

    p {
        font-size: 12px;
    }
}

@media(max-width: 500px){ 
    width: 50px;
    height: 37px;
    padding: 0 9px;
}
`