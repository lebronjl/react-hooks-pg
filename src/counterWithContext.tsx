import React, { createContext, useState } from 'react';

import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

type CounterContextProps = {
    counter: number;
    changeValue: (value: number) => void;
};

const counterContext = createContext<Partial<CounterContextProps>>({});

export const CounterWithContext: React.FC = () => {
    const [counterValue, setCounter] = useState(0);
    const changeValue = (nextValue: number) => {
        setCounter(nextValue);
    };
    return (
        <counterContext.Provider value={{ counter: counterValue, changeValue }}>
            <StyledSection title='Counter with context'>
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
    return (
        <counterContext.Consumer>
            {context => (
                <StyledButton
                    type='button'
                    value={props.text}
                    onClick={() => {
                        if (context.changeValue) {
                            context.changeValue(props.nextValue);
                        }
                    }}
                />
            )}
        </counterContext.Consumer>
    );
};

const CounterValue: React.FC = () => {
    return <counterContext.Consumer>{context => <StyledLabel>Counter: {context.counter}</StyledLabel>}</counterContext.Consumer>;
};
