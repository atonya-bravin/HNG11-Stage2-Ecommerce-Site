/*
 * This Component Contains all the options to be used in the navigation within the application. 
*/ 

import { Link } from "react-router-dom";
import SmallScreenMenu from "./SmallScreenMenu";

const Nav = () => {
    return(
        <div className="nav">
            <div className="ui secondary menu container menu">
                <a className="hidden md:inline w-[72px] h-[72px]" href="/">
                    <img src="./Resources/Images/logo.png" alt="" />
                </a>
                <div className="right menu" id="hidden-options-display">
                <a className="active item" href="#home">
                    Home
                </a>
                <a className="item" href="#features">
                    Abot
                </a>
                <a className="item" href="#featuredContent">
                    Products
                </a>
                <a className="item" href="#FAQ">
                    Blogs
                </a>
                </div>
                <div className="right menu" id="hidden-options-display">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..."/>
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <img src="./Resources/Images/Icons/favourite.svg" alt="favourite"/>
                        </a>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <img src="./Resources/Images/Icons/notifications.svg" alt="notification"/>
                        </a>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <img src="./Resources/Images/Icons/user.svg" alt="user"/>
                        </a>
                    </div>
                    <Link to="/checkout">
                        <div className="item text-[24px] right-menu-item">
                            <a href="/">
                                <img src="./Resources/Images/Icons/cart.svg" alt="cart"/>
                            </a>
                        </div> 
                    </Link>                
                </div>
                <div className="menu ml-[0px]">
                    <div className="item" id="hidden-display">
                        <SmallScreenMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;