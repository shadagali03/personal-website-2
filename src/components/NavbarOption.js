import React, {useRef} from 'react'
import styled from 'styled-components';


function NavbarOption({title="Default", iconVal}) {


  return (
    <NavbarOptionContainer>
        {title}
        <IconContainer>
            {iconVal}
        </IconContainer>
    </NavbarOptionContainer>
  )
}

export default NavbarOption;

const NavbarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
    padding: 5px;
    padding-inline: 30px;

    :hover {
        opacity: .8;
        color: royalblue;
    }
`;

const IconContainer = styled.div`
    display: flex;
`;
