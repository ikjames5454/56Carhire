import React from 'react'
import AllFile from './filter/AllFile'
import FilterRoute from './FilterRoute'

const ListPage = () => {
  return (
    <section>
        <div>
           <AllFile/>
        </div>
        <div>
        <FilterRoute/>  
        </div>
    </section>
  )
}

export default ListPage