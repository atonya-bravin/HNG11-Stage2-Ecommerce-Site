import { createContext } from "react";

const initializeOrderInformation = () => {
    return({
        "numberOfItems": 0,
        "subTotal": 0,
        "itemsOnOrder": [],
        "taxes": 1.99,
        "shipping": 2.25
    });
}


export const orderInformationContext = createContext(initializeOrderInformation());