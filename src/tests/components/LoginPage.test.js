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

test('should call startLoginFacebook on Facebook button click', () => {
    const startLoginFacebook = jest.fn();
    const wrapper = shallow(<LoginPage startLoginFacebook={startLoginFacebook} />);
    wrapper.find('#buttonFacebook').simulate('click');
    expect(startLoginFacebook).toHaveBeenCalled();
});

test('should call startLoginTwitter on Facebook button click', () => {
    const startLoginTwitter = jest.fn();
    const wrapper = shallow(<LoginPage startLoginTwitter={startLoginTwitter} />);
    wrapper.find('#buttonTwitter').simulate('click');
    expect(startLoginTwitter).toHaveBeenCalled();
});