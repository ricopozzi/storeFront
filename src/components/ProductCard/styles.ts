import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 22%;
    height: 18rem;
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    border-radius: 12px;



    @media(max-width: 900px){
        width: 70%;
    }

    img {
        
        width: 80%;
        height: 45%;
        margin-bottom:10px;
        object-fit: contain;
    }

    section {
     width: 90%;
     min-height: 12%;
     padding-left: 14px;
     padding-right: 14px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     

        h1 {
        font-weight: 400;
        font-size: 16px;
        width: 50%;
        color: #2C2C2C;
    }

    div {
        min-width: 64px;
        height: 30px;
        border-radius: 5px;
        background: #373737;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        padding-right: 7px;
        padding-left: 7px;
    }
    }
    p {
        font-size: 12px;
        font-weight: 300;
        color: #2C2C2C;
        padding-right: 7px;
        padding-left: 7px;
        margin: 0;
        
    }

    button {
        width: 100%;
        height: 12%;
        background:#0F52BA;
        border-end-end-radius:12px;
        border-bottom-left-radius: 12px;
        margin-top: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        
        p {
            font-weight: 600;
            color: white;
            font-size: 14px;
            margin-left: 2px;
        }
    }

  

`