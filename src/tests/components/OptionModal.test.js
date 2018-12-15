import React from 'react';
import { shallow } from 'enzyme';
import { OptionModal } from '../../components/OptionModal';

let onRequestClose, history, wrapper;

beforeEach(() => {
    onRequestClose = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<OptionModal onRequestClose={onRequestClose}/>);
});

test('should render OptionModal', () => {
    expect(wrapper).toMatchSnapshot();
});