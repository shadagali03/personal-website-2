import React, { useRef } from 'react'
import styled from 'styled-components';
import NavbarOption from './NavbarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function Header({projectRef}) {

  // const executeScroll = () => {
  //   console.log('hi')
    // navRef.current?.scrollIntoView()
  // }

  return (
    <HeaderContainer>
        <NavContainer>
            <NavbarOption title={"Home"} iconVal={<HomeOutlinedIcon color='primary'/>} value='home'/>
            <NavbarOption title={"Skills"} iconVal={<StorageIcon color='primary'/>} value='skills'/>
            <NavbarOption title={"Projects"} iconVal={<DeveloperModeIcon color='primary'/>}  value='projects' />
            <NavbarOption title={"About"} iconVal={<PersonOutlineIcon color='primary'/>} value='about'/>
        </NavContainer>
        
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: right;
`;

const NavContainer = styled.div`
    display: flex;
    padding: 10px;
`;