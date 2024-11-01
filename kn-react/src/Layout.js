import {Outlet} from "react-router-dom";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";

const Layout = () => {
    return (
        <>
            <Outlet />
            
            <Footer />
        </>
    );
};

export default Layout;