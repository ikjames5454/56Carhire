import Layout from "./Layout.jsx";
import Hero from "./page/hero/Hero.jsx";
import ViewAllCarDetails from "./component/viewCars/ViewAllCarDetails.jsx";
import CarDetails from "./component/viewCars/CarDetails.jsx";
import MoreCars from "./component/morecars/MoreCars.jsx";

export const Route = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/hero',
                element:  <Hero />, 
            },
            {
                path: '/viewCars',
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