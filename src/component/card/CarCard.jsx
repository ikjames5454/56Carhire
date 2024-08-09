import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';


const CarCard = ({car}) => {
  return (
    <Card sx={{ maxWidth: 420, border:"none", borderColor:"none" }}>
    {/* <CardMedia
      component="img"
      // height={140} 
      //   width="100%"
      sx={{borderRadius: 5}}
      image={car.imageUrl}
      alt={car.model}
    /> */}
    <img src={car.imageUrl} alt={car.name}
                                 style={{width: '400px', borderRadius: '12px', height: '250px'}}/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {car.brand} {car.model}
      </Typography>
      <Typography variant="body2" color="text.secondary">  

        {car.type}
      </Typography>
      <Typography variant="body2">Price:  ₦{car.price}</Typography>
    </CardContent>
  </Card>
  )
}

export default CarCard