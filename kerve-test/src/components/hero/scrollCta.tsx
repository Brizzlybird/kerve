import * as React from 'react';
import { ArrowIcon } from '../Icons/arrowIcon';

import './scrollCta.scss';

export const ScrollCta: React.FunctionComponent = () => (
    <div className='scroll-cta'>
        <p>Scroll to</p>
        <h3>{`experience`.toUpperCase()}</h3>
        <ArrowIcon />
    </div>
)