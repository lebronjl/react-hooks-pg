import React from 'react';

import { CounterUseContext } from './counterUseContext';
import { CounterWithContext } from './counterWithContext';
import { WindowWidthClass } from './windowWidthClass';
import { WindowWidthUseStateEffect } from './windowWidthUseStateEffect';
import { CounterClass } from './counterClass';
import { CounterUseState } from './counterUseState';

function App() {
    return (
        <>
            <WindowWidthClass />
            <WindowWidthUseStateEffect />
            <CounterClass />
            <CounterUseState />
            <CounterWithContext />
            <CounterUseContext />
        </>
    );
}

export default App;
