import React from 'react'
import styled from 'styled-components'
import img from "../../asset/original.jpg"
import Carder from '../../Props/Card'
import data from "../../Props/Sdata.json"

const SecondComp = () => {
  return (
    <div>
       <Container>
        <Wrapper>
                <Row>
                    <Title>
                    BLOCKBUSTER MOVIES
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

export default SecondComp;
const Row= styled.div`
    width: 90%;
`
const Title= styled.div`
    margin-bottom: 10px;
    color: white;
    font-size:20px
`

const CardWrapper= styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Wrapper = styled.div`
    width:90%;
`
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #0B0C0F;
z-index: -1;
padding-top: 50px;
`
