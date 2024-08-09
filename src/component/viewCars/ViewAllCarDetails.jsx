import CarDetails from "./CarDetails.jsx";
import {Divider} from "@mui/material";
import MoreCars from "../morecars/MoreCars.jsx";
import ListOfCars from "../../assets/listOfCars.json"
import { useParams } from 'react-router-dom';


export default function ViewAllCarDetails() {

    const { id } = useParams();
  const car = ListOfCars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }
  
    const contentData = [
        {
            id: 1,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',


        },
        {
            id: 2,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156923/redcar1_rqazgp.jpg',

        },
        {
            id: 3,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156898/black3_zvtpwn.jpg',

        },

    ];
    return (
        <div className={'w-full'}>
            <Divider/>
            <div className={'px-24 py-10'}>
                <div className={'flex gap-14'}>
                    <div className={'flex-col'}>
                        <img
                            src={car.imageUrl}
                            alt="carOne"
                            style={{width:"611px",height:"340px", borderRadius:"12px"}}
                        />

                        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
                            {
                            // contentData.map((contentItem) => (
                                <div key={car.id}>
                                    <img src={car.imageUrl} alt={car.type}
                                         style={{width: '195px', borderRadius: '10px',height:'118px'}}/>
                                </div>
                            // ))
                            }
                        </div>
                    </div>
                    <div className={'-mt-5'}><CarDetails brand={car.brand} model={car.model} categories={car.type} price={car.price}/></div>
                </div>
                <MoreCars/>
            </div>
        </div>
    );
}
