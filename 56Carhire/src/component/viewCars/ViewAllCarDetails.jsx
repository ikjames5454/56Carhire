import CarDetails from "./CarDetails.jsx";
import {Divider} from "@mui/material";
import MoreCars from "../morecars/MoreCars.jsx";

export default function ViewAllCarDetails() {
    const contentData = [
        {
            id: 1,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',

        },
        {
            id: 2,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',

        },
        {
            id: 3,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',

        },

    ];
    return (
        <div className={'w-full'}>
            <Divider/>
            <div className={'px-24 py-10'}>
                <div className={'flex gap-14'}>
                    <div className={'flex-col'}>
                        <img
                            src="https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png"
                            alt="carOne"
                        />

                        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
                            {contentData.map((contentItem) => (
                                <div key={contentItem.id}>
                                    <img src={contentItem.imageUrl} alt={contentItem.name}
                                         style={{width: '195px', borderRadius: '10px'}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={'-mt-5'}><CarDetails/></div>
                </div>
                <MoreCars/>
            </div>
        </div>
    );
}
