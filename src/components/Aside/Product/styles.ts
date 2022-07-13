import styled from 'styled-components'

export const ProductContainer = styled.div`
position: relative;
width: 80%;
height: 55px;
background: #FFFFFF;
box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-around;


img {
    object-fit: contain;
    width: 20%;
    height: 80%;
}

h2 {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    width: 100px;
    margin-right: auto;
    color: #2C2C2C;
}
p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;


    color: #000000;
}
`

export const QuantityContainer = styled.div`
    width: 60px;
    height: 25px;
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;

    button {
        transform: scale(.9);
        border:none;
        font-size: 15px;
        cursor: pointer;
    }

    div {
        font-weight: 400;
        font-size: 12px;
        line-height: 10px;
        margin: 0 2px;
    }
    
`

export const Separator = styled.div`
/* border: thin solid #BFBFBFaa; */
height: 60%;
width: 1px;
background:#BFBFBFaa;
`

export const RemoveProduct = styled.div`

    position: absolute;
    top: -10px;
    right: -10px;
    width: 22px;
    height: 22px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    border-radius: 999px;
    z-index: 10;

    cursor: pointer;
    color: #FFFFFF;
`