/**
 * This is the footer component that contains information about the site
 */

import Socials from "../Socials";
import Services from "./Services";
import Account from "./Account";
import Support from "./Support";

const Footer = () => {
    return(
        <div className="bg-[#171354] text-[#FFF] px-[20px]">
            <div className="w-[100%] pb-[16px]">
            {/* Working on the responsiveness of the contact section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[20%] px-6 pt-10 pb-3">
                {/* <NewsLetter /> */}
                <Socials />
                <Services />
                <Account />
                <Support />
            </div>
            <div className="text-center mt-[32px]">
                Copyright Investo 2024.  All rights reserved
            </div>
        </div>
        </div>
    );
};

export default Footer;