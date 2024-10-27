import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <Header />

            <Link to="/">Main Page</Link>
            <Link to="/About">About Me</Link>
            <Link to="/Information">Information</Link>
            <Link to="/Treatment">Treatment</Link>
            <Link to="/Support">Support</Link>

            <Outlet />

            <Footer />
            <p>Footer Here</p>
        </>
    );
};

export default Layout;