import Footer from "./component/footer/Footer";

import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <div className="mt-4"> */}
            <Footer />
            {/* </div> */}
        </div>
    );
}

export default Layout;