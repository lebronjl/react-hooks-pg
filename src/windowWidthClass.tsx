import React from 'react';

import { StyledButton } from './styledButton';
import { StyledLabel } from './styledLabel';
import { StyledSection } from './styledSection';

interface IState {
    isSubscribed: boolean;
}

interface IProps {}

export class WindowWidthClass extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { isSubscribed: false };
    }

    render() {
        return (
            <StyledSection title='WindowWidth with class'>
                <StyledButton
                    type='button'
                    value={this.state.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                    onClick={() => this.setState({ isSubscribed: !this.state.isSubscribed })}
                />
                {this.state.isSubscribed ? <WindowWidthSubscribed /> : <StyledLabel>You are not subscribed</StyledLabel>}
            </StyledSection>
        );
    }
}

interface IWindowWidthSubscribedState {
    width: number;
}

interface IWindowWidthSubscribedProps {}

class WindowWidthSubscribed extends React.Component<IWindowWidthSubscribedProps, IWindowWidthSubscribedState> {
    constructor(props: IWindowWidthSubscribedProps) {
        super(props);
        this.state = { width: document.body.clientWidth };
    }

    componentDidMount() {
        this.subscribe();
    }

    componentDidUpdate(prevProps: IWindowWidthSubscribedProps, prevState: IWindowWidthSubscribedState) {
        if (prevState.width !== this.state.width) {
            console.log(`Window width is: ${this.state.width}`);
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    private subscribe = () => {
        console.log('suscribe to window resize');
        window.addEventListener('resize', this.updateWidth);
    };

    private unsubscribe = () => {
        console.log('Unsuscribe to window resize');
        window.removeEventListener('resize', this.updateWidth);
    };

    private updateWidth = () => {
        this.setState({ width: document.body.clientWidth });
    };

    render() {
        return <StyledLabel>You are subscribed. Width: {this.state.width}</StyledLabel>;
    }
}
