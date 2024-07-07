/*
    This Component holds the images representing items on flash sale.
*/

const FlashSale = () => {
    return(
        <div className="ui container">
            <h5 className="font-bold text-[18px] py-[8px]">
                EXCLUSIVE PERKS
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                <div className="h-[50vh] flashSale rounded-[8px]" id='flashSale-1'>
                    
                </div>
                <div className="h-[50vh] flashSale hidden md:inline rounded-[8px]" id='flashSale-2'>
                    
                </div>
            </div>
        </div>
    );
};

export default FlashSale;