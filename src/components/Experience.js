import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



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

const iconStyle = {
  cursor: 'pointer'
}

export default function Experience() {
  const [moneyOpen, setMoneyOpen] = useState(false);

  const handleOpen = (setIconOpen) => setIconOpen(true)
  const handleClose = (setIconOpen) => setIconOpen(false)
  return (
    <>
    <h3>My Experiences</h3>
    <p fontStyle='italics'>Hover over icons for more info!</p>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
            September 2022 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <PaidIcon color='primary' sx={{fontSize: 50}} onMouseOver={() => handleOpen(setMoneyOpen)}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2}}>
          <Typography variant="body2" component="span" sx={{ fontSize: 18, fontWeight: 'bold'}}>
            Stevens Student Managed Investment Fund
          </Typography>
          <Typography sx={{fontStyle: 'italic', fontSize: 14 }}>Quantitative Analyst Intern</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
            June 2022 - August 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <img height={'65px'} width={'65px'} src='data:image/png;base64,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' />
          <TimelineConnector />
        </TimelineSeparator>
          <Modal 
            open={moneyOpen}
            onClose={() => handleClose(setMoneyOpen)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Box>
          </Modal> 
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="body2" component="span" sx={{ fontSize: 18, fontWeight: 'bold'}}>
            Tektronix
          </Typography>
          <Typography sx={{fontStyle: 'italic', fontSize: 14 }}>Software Engineering Intern</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          April 2021 - July 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <img width='70px' height='70px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1waylgEjhDpsCosUhlZmrAHAMYQDaDOpcIQ&usqp=CAU' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="body2" component="span" sx={{ fontSize: 18, fontWeight: 'bold'}}>
            Buffalo Wild Wings
          </Typography>
          <Typography sx={{fontStyle: 'italic', fontSize: 14 }}>Server</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          March 2021 - June 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <img width='50xp' height='50px' src='data:image/png;base64,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' />
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="body2" component="span" sx={{ fontSize: 18, fontWeight: 'bold'}}>
            Code Ninjas
          </Typography>
          <Typography sx={{fontStyle: 'italic', fontSize: 14 }}>Teacher</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </>

    
    
  );
}
