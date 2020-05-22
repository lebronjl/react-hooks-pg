import React from 'react';
import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

interface IProps {}
interface IState {
    value: number;
}

export class CounterClass extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { value: 0 };
    }

    render() {
        return (
            <StyledSection title='Counter with state class'>
                <ChangeValueButton id='count-down' text='Decrement' changeCountervalue={() => this.setState({ value: this.state.value - 1 })} />
                <ChangeValueButton id='count-up' text='Increment' changeCountervalue={() => this.setState({ value: this.state.value + 1 })} />
                <ChangeValueButton id='zero-count' text='Reset' changeCountervalue={() => this.setState({ value: 0 })} />
                <CounterValue value={this.state.value}></CounterValue>
            </StyledSection>
        );
    }
}

interface IChangeValueButtonProps {
    id: string;
    text: string;
    changeCountervalue: () => void;
}

const ChangeValueButton: React.FC<IChangeValueButtonProps> = (props: IChangeValueButtonProps) => {
    return <StyledButton id={props.id} type='button' value={props.text} onClick={() => props.changeCountervalue()} />;
};

interface ICounterValueProps {
    value: number;
}

export const CounterValue: React.FC<ICounterValueProps> = (props: ICounterValueProps) => {
    return <StyledLabel>Counter: {props.value}</StyledLabel>;
};
