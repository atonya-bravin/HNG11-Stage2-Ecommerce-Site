/*
    This module contains the SmallScreenMenu Component.
    This component contains the menu that we see in the small screens.
*/
import React from 'react'
import { DropdownMenu, DropdownItem, Dropdown } from 'semantic-ui-react';

const SmallScreenMenu = () => (
    //use of the Dropdown component to come up with a dropdown button containing all the menu options
    //use of the align justify icon to make sure that the menu has an icon related to the menu
    <Dropdown text='Menu' button floating labeled className='icon' icon="align justify" id="signUpButton">
        <DropdownMenu className='left'>
            <a href="/">
                <DropdownItem>
                    <span>Home</span>
                </DropdownItem>
            </a>
            <a href="/">
                <DropdownItem>
                    <span>About</span>
                </DropdownItem>
            </a>
            <a href="/">
                <DropdownItem>
                    <span>Products</span>
                </DropdownItem>
            </a>
            <a href="/">
                <DropdownItem>
                    <span>blogs</span>
                </DropdownItem>
            </a>
        </DropdownMenu>
    </Dropdown>
);

export default SmallScreenMenu;