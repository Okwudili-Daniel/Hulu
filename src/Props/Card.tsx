import React from 'react'
import styled from 'styled-components';
import {HiArrowRight} from "react-icons/hi"
import img2 from "../asset/06646f8d-4ed5-4a8d-a757-b6815faa5271.jpg"


interface iProps{
    img:string
    firstText:string
    pTex:string

}

const Carder = ({img, firstText,pTex}:iProps) => {
  return (
    <div>
        <Card>
            <Image>
                    <Img src={img} alt="movie" />
            </Image>
            <FirstTex>{firstText}</FirstTex>
            <p>{pTex}</p>

        </Card>
    </div>
  )
}

export default Carder;
const Image = styled.div`
    width: 100%;
    position: relative;
    /* background-color: rgba(0,0,0,0.9); */
    display: flex;
    align-items: center;
    justify-content: center;
 
`

const FirstTex= styled.div`
    margin-bottom: -10px;
    font-size: 18px;
    color: #ffff;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    
`
const Card= styled.div`
width:250PX;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;
margin-top: 20px;

p{
    color: white;
}
/* align-items: center; */`
