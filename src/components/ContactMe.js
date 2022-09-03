import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import {BsInstagram, BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs'
import { useState } from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
    cursor: 'pointer'

}


function ContactMe() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <ModalContainer>
        <Button variant='contained' onClick={handleOpen}>Contact Me</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Contact Information
            </Typography>
            <Typography component={'span'} id="modal-modal-description" sx={{ mt: 2 }}>
                <Stack spacing={2}>
                    <Item>Phone Number</Item><p>609-516-5958</p>
                    <Item>Email</Item><p>shadagal@stevens.edu</p>
                    <Stack direction='row' justifyContent='center' spacing={4}>
                        <BsGithub size='2em' onClick={() => openInNewTab('https://github.com/shadagali03')} style={buttonStyle}/>
                        <BsLinkedin size='2em' onClick={() => openInNewTab('https://www.linkedin.com/in/sarang-hadagali-3567101b1/')} style={buttonStyle}/>
                        <BsFacebook size='2em' onClick={() => openInNewTab('https://www.facebook.com/sarang.hadagali/')} style={buttonStyle}/>
                        <BsInstagram size='2em' onClick={() => openInNewTab('https://www.instagram.com/sarang.hadagali/')} style={buttonStyle}/>
                    </Stack>
                </Stack>
            </Typography>
            </Box>
        </Modal>
    </ModalContainer>
  )
}

export default ContactMe;

const Item = styled.div`
    font-weight: bold;

    > p {
        font-weight: 100;
    }
`;

const ModalContainer = styled.div`
    .instagram {
        :hover {
            cursor: pointer;
        }
    }
`;