import React, { useState } from 'react';
import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

export const CounterUseState: React.FC = () => {
    const [value, setValue] = useState(0);

    return (
        <StyledSection title='Counter with state class'>
            <ChangeValueButton id='count-down' text='Decrement' changeCountervalue={() => setValue(value - 1)} />
            <ChangeValueButton id='count-up' text='Increment' changeCountervalue={() => setValue(value + 1)} />
            <ChangeValueButton id='zero-count' text='Reset' changeCountervalue={() => setValue(0)} />
            <CounterValue value={value}></CounterValue>
        </StyledSection>
    );
};

interface IChangeValueButtonProps {
    id: string;
    text: string;
    changeCountervalue: () => void;
}

const ChangeValueButton: React.FC<IChangeValueButtonProps> = (props: IChangeValueButtonProps) => {
    return <StyledButton type='button' value={props.text} onClick={() => props.changeCountervalue()} />;
};

interface ICounterValueProps {
    value: number;
}

export const CounterValue: React.FC<ICounterValueProps> = (props: ICounterValueProps) => {
    return <StyledLabel>Counter: {props.value}</StyledLabel>;
};
