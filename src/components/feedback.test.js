import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Renders some feedback', () => {
		let TEST_feedback = "You are wrong";
		const wrapper = shallow(<Feedback feedback={TEST_feedback}/>);

		expect(wrapper.contains(TEST_feedback)).toEqual(true);
	})
})