import CarIcon from "../../assets/carIcon";
import style from '../footer/footer.module.css';

const Footer = () => {
    return (
        <div className="bg-[#f2f8ff] p-28">
            <div className={`${style.bothlogoandicon}`}>
                <div className="mt-3">
                    <CarIcon />
                </div>
                    <span className= {`${style.logoName}`}style={{fontFamily: 'Aeonik'}}>56CarHire</span> 
                <div>
                </div>    
            </div>             
            <div className="flex flex-row gap-4">
                <span className={`${style.social}`}>Facebook</span>
                <span className={`${style.social}`}>Instagram</span>
                <span className={`${style.social}`}>Twitter</span>
            </div>

            <div className="mt-24">
                <p className={`${style.year}`}>© 2023. Powered by <span className={`${style.year1}`}>56Carhire</span>. All Rights Reserved.</p>

                
            </div>           
        </div>  


    )
};

export default Footer;