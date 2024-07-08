/*
 *  This component acts as the application component, holding 
 *  all the other components within the application. 
*/

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav";
import Subscription from "./Subscription";

const OnlineShop = () => {
    return(
        <div>
            <Nav />
            <Outlet />
            <Subscription />
            <Footer />
        </div>
    );
};

export default OnlineShop;
