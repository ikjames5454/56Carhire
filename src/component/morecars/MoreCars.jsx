import styles from './moreCars.module.css';
import Condition from '../condition/Condition';

export default function MoreCars({category}) {
    const moreCars = [
        {
            id: 1,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 2,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156923/redcar1_rqazgp.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 3,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156906/blackcar_dsapcm.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 4,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156915/redcar_kidl4q.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 5,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156898/black3_zvtpwn.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 6,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156886/black2_e7gaq5.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 7,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156886/black2_e7gaq5.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 8,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 9,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 10,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156886/black2_e7gaq5.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 11,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156915/redcar_kidl4q.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 12,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 13,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 14,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156915/redcar_kidl4q.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 15,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 16,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 17,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156886/black2_e7gaq5.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 18,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723127736/xq6wjz3zqukm80xxpbpr.png',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 19,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156906/blackcar_dsapcm.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
        {
            id: 20,
            imageUrl: 'https://res.cloudinary.com/dvzxk9ypm/image/upload/v1723156886/black2_e7gaq5.jpg',
            name: "Mazda MX-5 Miata",
            Convertible: "Convertible 4 seats",
        },
    ];

    return (
        <>
            <div className={"font-neue-montreal text-[32px] font-medium leading-[46.4px] tracking-[-0.005em] text-left text-custom-dark mt-20"}>More vehicles in this category</div>
            <div className={'mt-10'}>
                {/*items-center flex justify-center mt-10*/}
                {/* <div className="grid-cols-4 grid tgrid-rows-5 gap-6 custom-scroll-bar"> */}
                    {/* {moreCars.map(car => (
                        <div key={car.id} className="car-item">
                            <img src={car.imageUrl} alt={car.name}
                                 style={{width: '285px', borderRadius: '12px', height: '165px'}}/>
                            <span className={styles.name}>{car.name}</span>
                            <div className={styles.Convertible}>{car.Convertible}</div>
                        </div>
                    ))} */}
                    <Condition type={category} length={0}/>
                {/* </div> */}
            </div>
        </>
    );
}
