import * as React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CounterUseState } from './counterUseState';

Enzyme.configure({ adapter: new Adapter() });

describe('<TestComponent />', () => {
    let wrapper: any;

    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState];

    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        wrapper = Enzyme.shallow(<CounterUseState />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Count Up', () => {
        it('calls setCount with count + 1', () => {
            wrapper.find('#count-up').props().changeCountervalue();

            expect(setState).toHaveBeenCalledWith(1);
        });
    });

    describe('Count Down', () => {
        it('calls setCount with count - 1', () => {
            wrapper.find('#count-down').props().changeCountervalue();

            expect(setState).toHaveBeenCalledWith(-1);
        });
    });

    describe('Zero', () => {
        it('calls setCount with 0', () => {
            wrapper.find('#zero-count').props().changeCountervalue();

            expect(setState).toHaveBeenCalledWith(0);
        });
    });
});
