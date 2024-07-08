//This module contains the Socials component that holds all the infor on the social media section

const Socials = () => {
    return(
        <div className="flex items-center">
            <div>
                <div>
                    <img src="./Resources/Images/footer-logo.png"/>
                </div>
                <div className="flex mt-[20px] gap-[20px]">
                    <div className='text-[24px]'>
                        <a href="/">
                            <i class="facebook f icon"></i>
                        </a>
                    </div>
                    <div className='text-[24px]'>
                        <a href="/">
                            <i class="twitter icon"></i>
                        </a>
                    </div>
                    <div className='text-[24px]'>
                        <a href="/">
                            <i class="instagram icon"></i>
                        </a>
                    </div>
                    <div className='text-[24px]'>
                        <a href="/">
                            <i class="youtube icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Socials;