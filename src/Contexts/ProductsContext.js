import { createContext } from "react";

const initializeProductInformation = () => {
    return([{
        "id": 0,
        "name": "Custom Air force 1",
        "price": 1400,
        "image_URL": "./Resources/Images/Products/image 38.png",
        "ordered_quantity": 0,
        "selected": false
    },
    {
        "id": 1,
        "name": "ASICS Gel-Cumulus 26",
        "price": 5000,
        "image_URL": "./Resources/Images/Products/image 40.png",
        "ordered_quantity": 0,
        "selected": false
    },
    {
        "id": 2,
        "name": "New Balance Womens",
        "price": 3500,
        "image_URL": "./Resources/Images/Products/image 41.png",
        "ordered_quantity": 0,
        "selected": false
    },
    {
        "id": 3,
        "name": "Allbirds Women's Tree Runners",
        "price": 6000,
        "image_URL": "./Resources/Images/Products/image 43.png",
        "ordered_quantity": 0,
        "selected": false
    },
    {
        "id": 4,
        "name": "New Balance Womens",
        "price": 3500,
        "image_URL": "./Resources/Images/Products/image 44.png",
        "ordered_quantity": 0,
        "selected": false
    },
    {
        "id": 5,
        "name": "Custom Air force 1",
        "price": 1600,
        "image_URL": "./Resources/Images/Products/image 45.png",
        "ordered_quantity": 0,
        "selected": false
    }]);
}


export const productInformationContext = createContext(initializeProductInformation());