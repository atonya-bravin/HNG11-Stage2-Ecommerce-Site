/*
 * This Component Contains all the options to be used in the navigation within the application. 
*/ 

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
                            <i className="heart icon"></i>
                        </a>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <i className="bell icon"></i>
                        </a>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <i className="user icon"></i>
                        </a>
                    </div>
                    <div className="item text-[24px] right-menu-item">
                        <a href="/">
                            <i className="red shopping cart icon"></i>
                        </a>
                    </div>                 
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