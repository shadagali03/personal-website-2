import React from 'react'
import styled from 'styled-components';

function IconContainer({iconVal, text}) {
  return (
    <MyContainer>
        {iconVal}
        <p>
            {text}
        </p>
    </MyContainer>
  )
}

export default IconContainer;

const MyContainer = styled.div`
    display: flex;
    flex-direction: column;

    > p {
        color: rgb(30, 161, 253);
    }

`;
