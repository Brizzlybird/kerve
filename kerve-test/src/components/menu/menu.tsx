import * as React from 'react';

import './menu.scss';
import { MenuItems } from './menuItems';
import { NavButton } from '../buttons/navButton';

export const Menu: React.FunctionComponent = () => (
    <div className='menu-wrapper'>
        <div className='logo'>marble</div>
        <MenuItems menuItems={['Strategy', 'Creative', 'Marketing', 'Experience']} />
        <div className='nav-section'>
            <p>Let's talk</p>
            <NavButton />
        </div>
    </div>
)