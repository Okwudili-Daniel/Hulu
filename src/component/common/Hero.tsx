import React from 'react'
import styled from 'styled-components'
import img from "../../asset/original.jpg"
import Carder from '../../Props/Card'
import img2 from "../../asset/29094661-86ff-4402-a48a-d722ed343048.jpg"
import data from "../../Props/data.json"


const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Text>
                <h1>Movies</h1>
                <p>Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.</p>
            </Text>

                <Row>
                    <Title>
                        Hulu Originals
                    </Title>
                    <CardWrapper>
                        {data?.map((el) =>(
                            <Carder key={el.id}
                            img={el.img}
                            firstText={el.firstText}
                            pTex={el.pTex}
                            />
                        ))}
                    </CardWrapper>
                </Row>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero;
const Row= styled.div`
    width: 90%;
    position: absolute;
    bottom: -100px;
`
const Title= styled.div`
    margin-bottom: 10px;
    color: white;
    font-size:20px
`

const CardWrapper= styled.div`
    width: 90%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Text= styled.div`
    width:60%;
    h1{
        font-size: 45px;
        font-weight: 400;
        color: #ffff
    };
    p{
        font-size: 25px;
        color: #ffff
    }
`
const Wrapper = styled.div`
    width:90%;
    padding-top: 250px;
padding-bottom: 300px;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${img});
position: relative;
z-index: 1;
`
