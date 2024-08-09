import React,{useState} from 'react'
import ListOfCars from "../../assets/listOfCars.json"
import {Grid } from '@mui/material';
import CarCard from '../../component/card/CarCard';
import { NavLink } from 'react-router-dom';


const Condition = ({type,length}) => {
    const [cars, setCars] = useState(ListOfCars.filter((car) => car.type === type))

  const noBusesAvailable = cars.length === length;
  return (
    <Grid container spacing={2} marginTop={6} className='px-20'>
    {noBusesAvailable ? (
        <div className='text-2xl font-extrabold px-10 mt-32 mb-32 relative md:left-[40%] md:right-[40%]'>No {type} Available Yet.</div>
      ) : (
        cars.map((car) => (
          <Grid item xs={10} sm={6} md={4} lg={3} xl={3} key={car.id}>
            <NavLink
            to={`/viewCars/${car.id}`}
            >
            <CarCard car={car} />
            </NavLink>
          </Grid>
        ))
      )}
   </Grid>
  )
  
}

export default Condition