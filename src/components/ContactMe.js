import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Socials from './Socials';



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



function ContactMe() {
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
                    <Socials />
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