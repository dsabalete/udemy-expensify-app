import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginGoogle on Google button click', () => {
    const startLoginGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} />);
    wrapper.find('#buttonGoogle').simulate('click');
    expect(startLoginGoogle).toHaveBeenCalled();
});

test('should call startLoginGithub on Github button click', () => {
    const startLoginGithub = jest.fn();
    const wrapper = shallow(<LoginPage startLoginGithub={startLoginGithub} />);
    wrapper.find('#buttonGithub').simulate('click');
    expect(startLoginGithub).toHaveBeenCalled();
});