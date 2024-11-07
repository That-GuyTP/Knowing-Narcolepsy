import {Outlet} from "react-router-dom";
import "./css/Layout.css";
import Stars from "./components/Stars";

const Layout = () => {
    return (
        <>
            <Stars />
            <Outlet />
        </>
    );
};

export default Layout;