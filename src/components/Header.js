import React, { useRef } from 'react'
import styled from 'styled-components';
import NavbarOption from './NavbarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {FcAbout} from 'react-icons/fc'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';


function Header() {

  // const executeScroll = () => {
  //   console.log('hi')
  //   navRef.current?.scrollIntoView()
  // }

  return (
    <HeaderContainer>
        <NavContainer>
            <NavbarOption title={"Home"} iconVal={<HomeOutlinedIcon color='primary'/>} />
            <NavbarOption title={"About"} iconVal={<FcAbout size='1.5em'/>}/>
            <NavbarOption title={"Skills"} iconVal={<StorageIcon color='primary'/>}/>
            {/* <NavbarOption title={"Projects"} iconVal={<DeveloperModeIcon color='primary'/>} onClick={() => executeScroll()}/> */}
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
    padding: 30px;
`;