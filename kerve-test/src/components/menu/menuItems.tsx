import * as React from 'react';

import './menuItems.scss';

interface IMenuBar {
    menuItems: string[];
}

export const MenuItems: React.FunctionComponent<IMenuBar> = ({ menuItems }) => {
    return (
        <div className='bar-wrapper'>
            {menuItems.map((item, key) => <p key={key} className='menu-item'>{item.toUpperCase()}</p>)}
        </div>
    )
}