import Star from "../../assets/icons";
import style from './hero.module.css';
import Frame from '../../assets/Frame 14.png';
import ListPage from "../ListPage";

const Hero = () => {
    return (
        <section>
        <div className="bg-[#f2f8ff] py-[86px]">
            <div className="flex justify-between px-[121px] items-center">
                <div className="">
                    <div className="bg-white flex flex-row gap-4 w-fit">
                        <Star />
                        <span className={`${style.rate}`}>
                            Top #1 Car Rental in Nigeria
                        </span>
                    </div>
                    <div className="flex-grow">
                        <span className={`${style.description}`}>
                            Easy hire, Less Stress
                        </span>  
                    </div>              
                    <div>
                        <span className={`${style.description1}`}>Discover the freedom of exploring new destinations with our top-quality car hire services.<br/>
                            Whether you're planning a weekend getaway or a cross-country adventure, we offer a range<br/>
                            of vehicles to suit your needs. Enjoy competitive rates, flexible pick-up and drop-off options,<br/>
                            and exceptional customer service. Book now and start your journey with peace of mind.
                        </span> 
                    </div>
                </div>
                <div className="">
                    <img src={Frame} className="w-[482px] h-[342px]"/>
                </div>  
            </div>  
                  
        </div>
        <div className=" mt-5">
            <ListPage/>
         </div>     
        </section>
    )
}
export default Hero;


{/* <div className="flex flex-row justify-between"> */}
            {/* </div> */}
