import SmallCarIcon from '../../assets/smallCarIcon';
import style from './navBar.module.css';

const Navbar = () => {
    return(
        // <div id="navbar" className="bg-white flex justify-between px-24 py-4">
        <div id="navbar" className="bg-white flex flex-row sm:flex-row justify-between px-4 py-2 sm:px-24 sm:py-4">
            <div className={`${style.companyName}`}>
                <div className='mt-1'>
                    <SmallCarIcon />
                </div>
                <span className={`${style.logo}`}>56CarHire</span>
            </div>

            <button id='login' className={`${style.login}`}>Login as admin</button>
            
        </div>
    )

}
export default Navbar;

