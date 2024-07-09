/**
 * This is the component that showcases the products that are available on the site.
 */

import FlashSale from "./FlashSale";
import { useOutletContext } from "react-router-dom";
import { productInformationContext } from "../Contexts/ProductsContext";

const Products = () => {
    const [updateOrder, initialOrder, updateProducts, products] = useOutletContext();

    const clearItem= (indexToRemove, productToRemove) => {
        const updatedProducts = initialOrder.itemsOnOrder.filter(item => item.name !== productToRemove); 

        updateOrder(
            {
                "numberOfItems": initialOrder.numberOfItems - 1,
                "subTotal": parseInt(initialOrder.subTotal) - parseInt(products[indexToRemove].price),
                "itemsOnOrder": updatedProducts,
                "taxes": 1.99,
                "shipping": 2.25,
            }
        )
    };

    console.log(initialOrder);

    

    return(
        <productInformationContext.Provider value={products}>
            <div>
                <FlashSale />
                <div className="ui container three stackable cards py-[32px]">
                    {products.map((product, index)=>(
                        <div key={index} class="ui card">
                            <div className="flex justify-center items-center">
                                <img alt="" src={product.image_URL}/>
                            </div>
                            <div class="content">
                                <div class={products[index].selected === true ? "ui button red right floated displayedButton" : "ui button primary red floated hiddenButton"}
                                    onClick={(e)=>{
                                        products[index].ordered_quantity = products[index].ordered_quantity - 1;
                                        products[index].selected = false;
                                        clearItem(product.id, product.name);
                                        updateProducts(products);
                                    }}
                                >
                                    <i class="minus icon"></i>
                                    Remove
                                </div>
                                <div class={products[index].selected === false ? "ui button primary right floated displayedButton" : "ui button primary right floated hiddenButton"}
                                    onClick={(e)=>{
                                        products[index].ordered_quantity = products[index].ordered_quantity + 1;
                                        products[index].selected = true;
                                        updateOrder(
                                            {
                                                "numberOfItems": initialOrder.numberOfItems + 1,
                                                "subTotal": parseInt(initialOrder.subTotal) + parseInt(products[index].price),
                                                "itemsOnOrder": [...initialOrder.itemsOnOrder, products[index]],
                                                "taxes": 1.99,
                                                "shipping": 2.25
                                            }
                                        )
                                        updateProducts(products);
                                    }}
                                >
                                    <i class="plus icon"></i>
                                    Add
                                </div>
                                <div>
                                    <div className="text-[16px]">
                                        {product.name}
                                    </div>
                                    <div className="mt-[8px] font-bold text-[20px]">
                                        $ {product.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </productInformationContext.Provider>
    );
};

export default Products;