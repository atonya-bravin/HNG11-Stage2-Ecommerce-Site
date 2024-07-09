/**
 * This is the component that showcases the products that are available on the site.
 */

import { useEffect, useState } from "react";
import FlashSale from "./FlashSale";
import { useOutletContext } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [updateOrder, numberOfItems, itemsOnOrder, subTotal] = useOutletContext();

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch('./Resources/Data/Products.json');
                if (response.ok) {
                    const productsData = await response.json();
                    setProducts(productsData);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData();
    },[]);
    return(
            <div>
                <FlashSale />
                <div className="ui container three stackable cards py-[32px]">
                    {products.map((product, index)=>(
                        <div key={index} class="ui card">
                            <div className="flex justify-center items-center">
                                <img alt="" src={product.image_URL}/>
                            </div>
                            <div class="content">
                                <div class="ui button primary right floated"
                                    onClick={(e)=>{
                                        updateOrder(
                                            {
                                                "numberOfItems": numberOfItems + 1,
                                                "subTotal": parseInt(subTotal) + parseInt(products[index].price),
                                                "itemsOnOrder": [...itemsOnOrder, products[index]]
                                            }
                                        )
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
    );
};

export default Products;