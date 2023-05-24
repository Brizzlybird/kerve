import * as React from 'react';
import { IconContext } from 'react-icons';
import { TfiArrowDown } from "react-icons/tfi";

import './arrowIcon.scss';

export const ArrowIcon: React.FunctionComponent = () => (
    <IconContext.Provider value={{ className: "arrow-icon" }}>
        <TfiArrowDown />
    </IconContext.Provider>
)