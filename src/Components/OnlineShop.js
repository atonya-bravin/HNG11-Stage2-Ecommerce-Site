/*
 *  This component acts as the application component, holding 
 *  all the other components within the application. 
*/

import FlashSale from "./FlashSale";
import Nav from "./Nav";

const OnlineShop = () => {
    return(
        <div>
            <Nav />
            <FlashSale />
        </div>
    );
};

export default OnlineShop;
