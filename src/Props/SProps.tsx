import React from 'react'
import styled from 'styled-components';
import {HiArrowRight} from "react-icons/hi"


interface iProps{
    img:string
    firstText:string
    pTex:string

}

const SProps = ({img, firstText,pTex}:iProps) => {
  return (
    <div>
      <Card>
            <Image>
                    <Img src={img} alt="movie" />
                <Invisible>
                    <Icon>
                        <HiArrowRight/>
                    </Icon>
                </Invisible>
            </Image>
            <FirstTex>{firstText}</FirstTex>
            <p>{pTex}</p>

        </Card>
    </div>
  )
}

export default SProps;
const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
`
const Invisible = styled.div`
    width: 100%;
    /* height: 100%; */
    border-radius: 7%;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0px;
    top: 0px;
    opacity: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* cursor: pointer; */

    &:hover{
        cursor: pointer;
        opacity: 1;
        border: 3px solid gray
    }
`
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
    color: silver;
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
/* align-items: center; */`
