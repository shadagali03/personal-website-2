import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


export default function MediaCard({myimage, altText, projectName, description, myUrl}) {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={myimage}
                alt={altText}
            />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Button size="small" onClick={() => openInNewTab(myUrl)}>Github</Button>
        </Card>

    
    
  );
}


