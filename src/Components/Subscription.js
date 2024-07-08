/**
 * This component contains the subscription section.
 */

const Subscription = () => {
    return(
        <div className="bg-[#342CC0] py-[72px] flex items-center justify-center text-[#FFF]">
            <div>
                <h1 className="font-bold text-[24px] md:text-[32px] text-center">Join Our Community</h1>
                <div className="flex justify-center">
                    <div className="text-center mt-[8px] text-[16px] w-[80%]">
                        We have the community committed to sharing more information about us. 
                        To get our promo you can leave your email here 
                    </div>
                </div>
                <div className="flex justify-center">
                    <div class="ui action input mt-[20px]">
                        <input type="text" placeholder="Enter Email"/>
                        <button class="ui button red">Subscribe</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Subscription;