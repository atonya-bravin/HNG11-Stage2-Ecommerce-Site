/*
 *  This component acts as the application component, holding 
 *  all the other components within the application. 
*/

import FlashSale from "./FlashSale";
import Nav from "./Nav";
import Products from "./Products";
import Subscription from "./Subscription";

const OnlineShop = () => {
    return(
        <div>
            <Nav />
            <FlashSale />
            <Products />
            <Subscription />
        </div>
    );
};

export default OnlineShop;
