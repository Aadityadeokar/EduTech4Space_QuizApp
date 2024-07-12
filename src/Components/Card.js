import React from 'react';
import { Card as MuiCard, CardContent,Typography, Button, Box } from '@mui/material';

const CarCard = ({ imgSrc, title, description, link, onAddToCompare }) => {
    return (
        <Box
            sx={{
                maxWidth: 345,
                margin: 'auto',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
                textTransform: 'none', 
                display: 'block', 
                padding: 0, 
            }}
        >
            <MuiCard
                sx={{
                    maxWidth: 350,
                    minHeight: 350,
                    maxHeight: 350,
                    margin: 'auto',
                    textAlign: 'left', 
                }}
            >
               
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Button href={link} variant="contained" color="primary">
                        View Details
                    </Button>
                    <Button onClick={onAddToCompare} variant="contained" color="secondary">
                        Compare
                    </Button>
                </Box>
            </MuiCard>
        </Box>
    );
};

export default Card;
