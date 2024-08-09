import Layout from "./Layout.jsx";
import Hero from "./page/hero/Hero.jsx";
import Bus from "./page/filter/Bus.jsx";
import Convertible from "./page/filter/Convertible.jsx";
import FamilyCar from "./page/filter/FamilyCar.jsx";
import LuxuryCar from "./page/filter/LuxuryCar.jsx";
import MiniVan from "./page/filter/MiniVan.jsx";
import SportCar from "./page/filter/SportCar.jsx";
import SUV from "./page/filter/SUV.jsx";
import Truck from "./page/filter/Truck.jsx";
import Van from "./page/filter/Van.jsx";
import Wagon from "./page/filter/Wagon.jsx"

import FilterRoute from "./page/FilterRoute/index.jsx";

;

import ViewAllCarDetails from "./component/viewCars/ViewAllCarDetails.jsx";
import CarDetails from "./component/viewCars/CarDetails.jsx";
import MoreCars from "./component/morecars/MoreCars.jsx";

export const Route = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:  <Hero />, 
                children: [
                    {
                        path:'/convertible',
                        element:<Convertible />
                    },
                   
                    {
                        path:'/bus',
                        element:<Bus />
                    },
                   
                    {
                        path:'/family-car',
                        element:<FamilyCar />
                    },
                    {
                        path:'/luxury-car',
                        element:<LuxuryCar />
                    },
                    {
                        path:'/mini-van',
                        element:<MiniVan />
                    },
                    {
                        path:'/sport-car',
                        element:<SportCar />
                    },
                    {
                        path:'/suv',
                        element:<SUV />
                    },
                    {
                        path:'/truck',
                        element:<Truck />
                    },
                    {
                        path:'/van',
                        element:<Van />
                    },
                    {
                        path:'/wagon',
                        element:<Wagon />
                    },
                   
                ]
            },
          
        
            {
                path: '/viewCars/:id',
                element:  <ViewAllCarDetails />,
            },
            {
                path: '/carDetails',
                element:  <CarDetails />,
            },
            {
                path: '/moreCars',
                element:  <MoreCars />,
            }
        ]

    },
  
]