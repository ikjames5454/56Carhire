import React from 'react'
import { NavLink } from 'react-router-dom';


const AllFile= () => {
  const activeLink = 'bg-yellow-50 text-red-500 border border-red-500 rounded-full  border-2'
  const normalLink = ''

  return (
    <section>
      <div className=' h-16 grid xl:grid-cols-11 font-bold px-20 sm:grid-cols-5 grid-cols-3 gap-2 mt-20 mb-80 xl:mb-0  sm:mb-44'>
        <NavLink
        to="/"
        className={({ isActive }) => 
        isActive ? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full  '>All Vehicle</p>
        </NavLink>

        <NavLink
        to="/bus"
        className={({ isActive }) => 
        isActive ? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Bus</p>
        </NavLink>
        
        <NavLink
        to="/convertible"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Convertible</p>
        </NavLink>
       
        <NavLink
        to="/family-car"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Family Car</p>
        </NavLink>
       
        <NavLink
        to="/luxury-car"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Luxury Car</p>
        </NavLink>
        
        <NavLink
        to="/mini-van"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Mini Van</p>
        </NavLink>
        
        <NavLink
        to="/sport-car"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Sport Car</p>
        </NavLink>
      
        <NavLink
        to="/suv"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>SUV</p>
        </NavLink>
       
        <NavLink
        to="/truck"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Truck</p>
        </NavLink>
       
        <NavLink
        to="/van"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Van</p>
        </NavLink>
        
        <NavLink
        to="/wagon"
        className={({ isActive }) => 
        isActive? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Wagon</p>
        </NavLink>
        

     </div>
    </section>
   
  )
}

export default AllFile