import { Stack } from '@mui/system';
import React, {useRef} from 'react'
import styled from 'styled-components';


function NavbarOption({title="Default", iconVal, value}) {

    const scrollToDiv = () => document.getElementById(value).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  return (
    <NavbarOptionContainer onClick={scrollToDiv}>
        <IconContainer>
                {iconVal}
        </IconContainer>
                <div className='name'>
                    {title}
                </div>
    </NavbarOptionContainer>
  )
}

export default NavbarOption;

const NavbarOptionContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: black;
    padding-inline: 20px;

    .name {
        /* color: white; */
    }


    :hover {
        opacity: .8;
        .name {
            color: rgb(0,89,179);
        }
    }
`;

const IconContainer = styled.div`
`;
