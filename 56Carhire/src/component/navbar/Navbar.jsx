import SmallCarIcon from '../../assets/smallCarIcon';
import style from './navBar.module.css';

const Navbar = () => {
    return(
        <div className="bg-white flex flex-row justify-between px-32 py-4">
            <div className={`${style.companyName}`}>
                <div className='mt-1'>
                    <SmallCarIcon />
                </div>
                <span className={`${style.logo}`}>56CarHire</span>
            </div>

            <button className={`${style.login}`}>Login as admin</button>
            
        </div>
    )

}
export default Navbar;

