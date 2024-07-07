/*
 *  This component acts as the application component, holding 
 *  all the other components within the application. 
*/

import FlashSale from "./FlashSale";

const OnlineShop = () => {
    return(
        <div className="ui container">
            <FlashSale />
        </div>
    );
};

export default OnlineShop;
