import Billing from '../Components/Billing';
import Cart from '../Components/Cart';
import OnlineShop from '../Components/OnlineShop';
import Products from '../Components/Products';

//Implemetation of the home "/" route
export const HomeRoute = {
        path: '/',
        element: <OnlineShop/>,
        children: [
            {
                path: '',
                element: <Products />
            },
            {
                path: 'billing',
                element: <Billing />
            },
            {
                path: 'checkout',
                element: <Cart />
            }

        ]
};