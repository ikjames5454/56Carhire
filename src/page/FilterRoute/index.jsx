import React from 'react'
import {Routes, Route} from "react-router-dom"
import All from "../filter/All.jsx";
import Bus from "../filter/Bus.jsx";
import Convertible from "../filter/Convertible.jsx";
import FamilyCar from "../filter/FamilyCar.jsx";
import LuxuryCar from "../filter/LuxuryCar.jsx";
import MiniVan from "../filter/MiniVan.jsx";
import SportCar from "../filter/SportCar.jsx";
import SUV from "../filter/SUV.jsx";
import Truck from "../filter/Truck.jsx";
import Van from "../filter/Van.jsx";
import Wagon from "../filter/Wagon.jsx"

const FilterRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<All />} />
            <Route path='/bus' element={<Bus/>} />
            <Route path='/convertible' element={<Convertible />} />
            <Route path="/family-car" element={<FamilyCar />} />
            <Route path="/luxury-car" element={<LuxuryCar />} />
            <Route path="/mini-van" element={<MiniVan />} />
            <Route path="/sport-car" element={<SportCar />} />
            <Route path="/suv" element={<SUV />} />
            <Route path="/truck" element={<Truck />} />
            <Route path="/van" element={<Van />} />
            <Route path="/wagon" element={<Wagon />} />
        </Routes>

    </div>
  )
}

export default FilterRoute