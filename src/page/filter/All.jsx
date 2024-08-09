import React from 'react'
import CarCard from '../../component/card/CarCard'
import ListOfCars from "../../assets/listOfCars.json"
import {Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const All = () => {
  
  return (
   <Grid container spacing={2} marginTop={6} className='px-20'>
     {ListOfCars.map((car) => (
       <Grid item xs={10} sm={6} md={4} lg={3} xl={3} key={car.id}>
        <NavLink
          to={`/viewCars/${car.id}`}
          style={{ textDecoration: 'none' }}
        >
        <CarCard car={car} />
        </NavLink>
       </Grid>
     ))}
   </Grid>
  )
}

export default All