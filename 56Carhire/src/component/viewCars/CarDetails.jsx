import style from '../viewCars/carDetails.module.css';
export default function CarDetails() {
    const carDetails = [
        {
            id: 1,
            status: "Hired",
            title: 'Mazda MX-5 Miata',
            sportCar: 'Sport car',
            automatic:"Automatic",
            seats:"3 seats",
            content: 'The Mazda MX-5 Miata is a classic, affordable sports car known for its lightweight, agile handling, ' +
                'and engaging driving experience. With its sleek roadster design, it typically features a two-seater layout and' +
                ' a convertible top. The Miata offers precise steering and a responsive, ' +
                'high-revving engine, prioritizing driving fun over sheer power. Its driver-focused interior and overall value make it a favorite among driving enthusiasts.',
            price: '₦30,000/hr'
        },
    ];

    return (
        <div className={'p-10'}>
            {carDetails.map(car => (
                <div key={car.id}>
                    <span
                        className={`${style.status} ${car.status === 'Hired' ? style.hired : style.available}`}
                    >
                        {car.status}
                    </span>
                    <div className={style.title}>
                        <span> {car.title}</span>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <span className={style.categories}>{car.sportCar}</span>
                        <span className={style.categories}>{car.automatic}</span>
                        <span className={style.categories}>{car.seats}</span>

                    </div>
                    <div className={style.content}>{car.content}</div>
                    <div className={`${style.price} mt-7`}>{car.price}</div>
                </div>
            ))}
            <div className='mt-12'>
                <button
                    id={'hireCar'}
                    style={{
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        backgroundColor: '#AD3307',
                        width: "488px",
                        height: "41px",
                        padding: "12px 10px",
                        borderRadius: "4px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: 'none',
                        cursor: 'pointer'
                }}>
                Hire this car
            </button>
            </div>
        </div>
    );
}