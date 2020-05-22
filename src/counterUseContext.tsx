import React, { createContext, useContext, useState } from 'react';

import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

type CounterContextProps = {
    counter: number;
    changeValue: (value: number) => void;
};

const counterContext = createContext<Partial<CounterContextProps>>({});

export const CounterUseContext: React.FC = () => {
    const [counterValue, setCounter] = useState(0);
    const changeValue = (nextValue: number) => {
        setCounter(nextValue);
    };
    return (
        <counterContext.Provider value={{ counter: counterValue, changeValue }}>
            <StyledSection title='Counter with useContext'>
                <ChangeValueButton text='Decrement' nextValue={counterValue - 1} />
                <ChangeValueButton text='Increment' nextValue={counterValue + 1} />
                <ChangeValueButton text='Reset' nextValue={0} />
                <CounterValue />
            </StyledSection>
        </counterContext.Provider>
    );
};

interface IChangeValueButtonProps {
    text: string;
    nextValue: number;
}

const ChangeValueButton: React.FC<IChangeValueButtonProps> = (props: IChangeValueButtonProps) => {
    const { changeValue } = useContext(counterContext);
    return (
        <StyledButton
            type='button'
            value={props.text}
            onClick={() => {
                if (changeValue) {
                    changeValue(props.nextValue);
                }
            }}
        />
    );
};

const CounterValue: React.FC = () => {
    const { counter } = useContext(counterContext);
    return <StyledLabel>Counter: {counter}</StyledLabel>;
};
