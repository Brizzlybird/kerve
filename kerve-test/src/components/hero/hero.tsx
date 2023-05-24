import * as React from 'react';
import { HeroCta } from './heroCta';

import './hero.scss';
import { ScrollCta } from './scrollCta';

export const Hero: React.FunctionComponent = () => (
    <div className='hero'>
        <HeroCta />
        <ScrollCta />
    </div>
)