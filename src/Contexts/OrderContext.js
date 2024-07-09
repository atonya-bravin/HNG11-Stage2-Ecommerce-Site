import { createContext } from "react";

const initializeOrderInformation = () => {
    return({
        "numberOfItems": 0,
        "subTotal": 0,
        "itemsOnOrder": []
    });
}


export const orderInformationContext = createContext(initializeOrderInformation());