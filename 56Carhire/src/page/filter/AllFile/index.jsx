import React from 'react'
import { NavLink } from 'react-router-dom';


const AllFile= () => {
  const activeLink = 'bg-blue-100 text-blue-500 border border-blue-500 rounded-full  border-2'
  const normalLink = ''

  return (
    <section>
      <div className=' h-16 grid xl:grid-cols-11 font-bold px-20 sm:grid-cols-5 grid-cols-3 gap-2'>
        <NavLink
        to="/"
        className={({ isActive }) => 
        isActive ? 
        activeLink: normalLink}
        >
        <p className='border text-center  h-full px-4 py-4 rounded-full '>All Vehicle</p>
        </NavLink>

        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Bus</p>
        </NavLink>
        
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Convertible</p>
        </NavLink>
       
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Family Car</p>
        </NavLink>
       
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Luxury Car</p>
        </NavLink>
        
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Mini Van</p>
        </NavLink>
        
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Sport Car</p>
        </NavLink>
      
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>SUV</p>
        </NavLink>
       
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Truck</p>
        </NavLink>
       
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Van</p>
        </NavLink>
        
        <NavLink>
        <p className='border text-center  h-full px-4 py-4 rounded-full '>Wagon</p>
        </NavLink>
        

     </div>
    </section>
   
  )
}

export default AllFile