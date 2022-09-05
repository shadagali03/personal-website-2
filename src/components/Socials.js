import React from 'react'
import {BsInstagram, BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs'
import Stack from '@mui/material/Stack';
import FeedIcon from '@mui/icons-material/Feed';
import { WhileStatement } from 'requirejs';



function Socials({mycolor='black'}) {
    console.log(mycolor)
    const buttonStyle = {
        color: mycolor,
        cursor: 'pointer'

    }
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <Stack direction='row' justifyContent='center' spacing={4}>
        <BsGithub size='2em' onClick={() => openInNewTab('https://github.com/shadagali03')} style={buttonStyle}/>
        <BsLinkedin size='2em' onClick={() => openInNewTab('https://www.linkedin.com/in/sarang-hadagali-3567101b1/')} style={buttonStyle}/>
        <BsFacebook size='2em' onClick={() => openInNewTab('https://www.facebook.com/sarang.hadagali/')} style={buttonStyle}/>
        <BsInstagram size='2em' onClick={() => openInNewTab('https://www.instagram.com/sarang.hadagali/')} style={buttonStyle}/>
    </Stack>
  )
}

export default Socials;