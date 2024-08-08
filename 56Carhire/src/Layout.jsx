import Footer from "./component/footer/Footer";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;