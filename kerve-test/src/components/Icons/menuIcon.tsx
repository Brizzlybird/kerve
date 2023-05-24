import * as React from 'react';
import { IconContext } from 'react-icons';
import { HiBars2 } from "react-icons/hi2";

import './arrowIcon.scss';

export const MenuIcon: React.FunctionComponent = () => (
    <IconContext.Provider value={{ className: "menu-icon" }}>
        <HiBars2 />
    </IconContext.Provider>
)