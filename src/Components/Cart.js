import { Link, useOutletContext } from "react-router-dom";
import { useContext, useState } from "react";
import { productInformationContext } from "../Contexts/ProductsContext";

const Cart = () => {
    const [updateOrder, initialOrder] = useOutletContext();

    const productContext = useContext(productInformationContext);
    const [products, updateProducts] = useState(productContext);

    const clearItem= (indexToRemove, indexToChange) => {
        const updatedItems = initialOrder.itemsOnOrder.filter((_, index) => index !== indexToRemove);
        
        const removedProduct = initialOrder.itemsOnOrder[indexToRemove];
        
        const updatedProducts = products.map(product => {
            if (product.id === removedProduct.id) {
                return { ...product, selected: false };
            }
            return product;
        });

        updateOrder(
            {
                "numberOfItems": initialOrder.numberOfItems - 1,
                "subTotal": parseInt(initialOrder.subTotal) - parseInt(initialOrder.itemsOnOrder[indexToRemove].price),
                "itemsOnOrder": updatedItems,
                "taxes": 1.99,
                "shipping": 2.25,

            }
        )
        updateProducts(updatedProducts);
    };

    return(
        <productInformationContext.Provider value={products}>
            <div class="py-8">
                <div class="ui container mx-auto px-4">
                    <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div class="flex flex-col gap-4">
                        <div>
                            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table class="w-full">
                                    <thead>
                                        <tr>
                                            <th class="text-left font-semibold">Product</th>
                                            <th class="text-left font-semibold">Price</th>
                                            <th class="text-left font-semibold">Quantity</th>
                                            <th class="text-left font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {initialOrder.itemsOnOrder.map((product, index)=>(
                                                <tr key={index}>
                                                    <td class="py-4">
                                                        <div class="flex items-center">
                                                            <img class="hidden md:inline h-16 w-16 mr-4" src={product.image_URL} alt="Product"/>
                                                            <span class="font-semibold">{product.name}</span>
                                                        </div>
                                                    </td>
                                                    <td class="py-4">$ {product.price}</td>
                                                    <td class="py-4">
                                                        <div class="flex items-center">
                                                            <button class="border rounded-md py-2 px-4 mr-2"
                                                                onClick={(e)=>{
                                                                    if(product.ordered_quantity > 1){
                                                                        product.ordered_quantity = product.ordered_quantity - 1;
                                                                        updateOrder(
                                                                            {
                                                                                "numberOfItems": initialOrder.numberOfItems,
                                                                                "subTotal": parseInt(initialOrder.subTotal) - parseInt(product.price),
                                                                                "itemsOnOrder": initialOrder.itemsOnOrder,
                                                                                "taxes": 1.99,
                                                                                "shipping": 2.25,

                                                                            }
                                                                        )
                                                                    }
                                                                    else{
                                                                        clearItem(index, product.id);
                                                                    }
                                                                }}
                                                            >-</button>
                                                            <span class="text-center w-8">{product.ordered_quantity}</span>
                                                            <button class="border rounded-md py-2 px-4 ml-2"
                                                                onClick={(e)=>{
                                                                    product.ordered_quantity = product.ordered_quantity + 1;
                                                                    updateOrder(
                                                                        {
                                                                            "numberOfItems": initialOrder.numberOfItems,
                                                                            "subTotal": parseInt(initialOrder.subTotal) + parseInt(product.price),
                                                                            "itemsOnOrder": initialOrder.itemsOnOrder,
                                                                            "taxes": 1.99,
                                                                            "shipping": 2.25,

                                                                        }
                                                                    )
                                                                }}
                                                            >+</button>
                                                        </div>
                                                    </td>
                                                    <td class="py-4">$ {product.ordered_quantity * product.price}</td>
                                                </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="bg-white rounded-lg shadow-md p-6">
                                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                                <div class="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$ {initialOrder.subTotal}</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$ {initialOrder.taxes}</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$ {initialOrder.shipping}</span>
                                </div>
                                <hr class="my-2"/>
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold">Total</span>
                                    <span class="font-semibold">$ {
                                        initialOrder.subTotal + initialOrder.taxes + initialOrder.shipping
                                    }</span>
                                </div>
                                <Link to='/'>
                                    <button class="border border-width-[1px] border-[#000] py-2 px-4 rounded-lg mt-4 w-full md:w-[48%]">Continue Shopping</button>
                                </Link>
                                <Link to='/billing'>
                                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 md:ml-[4%] w-full md:w-[48%]">Proceed to Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </productInformationContext.Provider>
    );
};

export default Cart;