/*
 *  This component acts as the application component, holding 
 *  all the other components within the application. 
*/

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav";
import Subscription from "./Subscription";
import { orderInformationContext } from "../Contexts/OrderContext";
import { useContext, useState } from "react";

const OnlineShop = () => {
    const initialOrder = useContext(orderInformationContext);
    const [newOrder, updateOrder] = useState(initialOrder);

    return(
        <div>
            <Nav numberOfItems={newOrder.numberOfItems}/>
            <Outlet context={[updateOrder, newOrder]}/>
            <Subscription />
            <Footer />
        </div>
    );
};

export default OnlineShop;
