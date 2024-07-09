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
import { productInformationContext } from "../Contexts/ProductsContext";

const OnlineShop = () => {
    const initialOrder = useContext(orderInformationContext);
    const [newOrder, updateOrder] = useState(initialOrder);
    const productContext = useContext(productInformationContext);
    const [products, updateProducts] = useState(productContext);

    return(
        <div>
            <Nav numberOfItems={newOrder.numberOfItems}/>
            <Outlet context={[updateOrder, newOrder,updateProducts, products]}/>
            <Subscription />
            <Footer />
        </div>
    );
};

export default OnlineShop;
