import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CounterClass } from './counterClass';

Enzyme.configure({ adapter: new Adapter() });

describe('<CounterClass />', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = Enzyme.shallow(<CounterClass />);
    });

    it('has the initial state count of zero', () => {
        expect(wrapper.state()).toEqual({ value: 0 });
    });

    describe('The Count Up Button', () => {
        it('increments state count by 1 on click', () => {
            wrapper.find('#count-up').props().changeCountervalue();

            expect(wrapper.state()).toEqual({ value: 1 });
        });
    });

    describe('The Count Down Button', () => {
        it('decrements state count by 1 on click', () => {
            wrapper.find('#count-down').props().changeCountervalue();

            expect(wrapper.state()).toEqual({ value: -1 });
        });
    });

    describe('The Count Zero Button', () => {
        it('sets state count to 0 on click', () => {
            wrapper.setState({ value: 10 });

            wrapper.find('#zero-count').props().changeCountervalue();

            expect(wrapper.state()).toEqual({ value: 0 });
        });
    });
});
