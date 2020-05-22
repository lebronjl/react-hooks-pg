import React, { useEffect, useState } from 'react';

import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

export const WindowWidthUseStateEffect: React.FC = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <StyledSection title='WindowWidth with useState and useEffect'>
            <StyledButton type='button' value={isSubscribed ? 'Unsubscribe' : 'Subscribe'} onClick={() => setIsSubscribed(!isSubscribed)} />
            {isSubscribed ? <WindowWidthSubscribed /> : <StyledLabel>You are not subscribed</StyledLabel>}
        </StyledSection>
    );
};

const WindowWidthSubscribed: React.FC = () => {
    const [width, setWidth] = useState(document.body.clientWidth);
    useEffect(() => {
        subscribe();
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        console.log(`Window width is: ${width}`);
    }, [width]);

    const subscribe = () => {
        console.log('suscribe to window resize');
        window.addEventListener('resize', updateWidth);
    };

    const unsubscribe = () => {
        console.log('Unsuscribe to window resize');
        window.removeEventListener('resize', updateWidth);
    };

    const updateWidth = () => {
        setWidth(document.body.clientWidth);
    };

    return <StyledLabel>You are subscribed. Width: {width}</StyledLabel>;
};
