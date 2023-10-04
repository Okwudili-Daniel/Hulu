import React from 'react'
import styled from 'styled-components';
import {LiaTimesSolid} from "react-icons/lia"

const Head = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Movies
          </Text>
          <Icon>
            <LiaTimesSolid/>
          </Icon>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Head;
const Icon = styled.div`
font-size: 30px;
color: gray;
position: absolute;
right: 0px;
`
const Text = styled.div`
font-size: 25px;
color: white;

`

const Wrapper= styled.div`
width: 95%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

const Container= styled.div`
width:100%;
padding: 20px 0px;
border-bottom: 1px solid gray;
/* height: 70vh; */
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 2;
/* background-color: gray; */
`
