import { useOutletContext } from "react-router-dom";

const Billing = () => {
    const [updateOrder, newOrder] = useOutletContext();

    return(
        <div class="py-8">
            <div class="ui container mx-auto px-4">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-3/4">
                    <div class="w-full px-6 py-8 md:p-8">
                        <h2 class="text-2xl font-bold text-gray-800">Checkout</h2>
                        <p class="mt-4 text-gray-600">Please fill out the form below to complete your purchase.</p>
                        <form class="mt-6">
                            <div class="mb-6">
                                <label class="block text-gray-800 font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-800 font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-800 font-bold mb-2" for="card_number">
                                    Card Number
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-800 font-bold mb-2" for="expiration_date">
                                    Expiration Date
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="MM / YY"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-800 font-bold mb-2" for="cvv">
                                    CVV
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***"/>
                            </div>
                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>
                        </form>
                    </div>
                    </div>
                    <div class="md:w-1/4 md:mt-[24px]">
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
                            <div class="flex justify-between mb-2">
                                <span>Items({newOrder.numberOfItems})</span>
                                <span>$ {newOrder.subTotal}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>$ {newOrder.taxes}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>$ {newOrder.shipping}</span>
                            </div>
                            <hr class="my-2"/>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Total</span>
                                <span class="font-semibold">
                                    {
                                        newOrder.subTotal + newOrder.shipping + newOrder.taxes
                                    }
                                </span>
                            </div>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Purchase Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;