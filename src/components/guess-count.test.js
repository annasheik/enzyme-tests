import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders the correct guess count', () => {
		let TEST_COUNT = 2;
		const wrapper = shallow(<GuessCount guessCount = {TEST_COUNT}/>);
		expect(wrapper.text()).toEqual(`You've made ${TEST_COUNT} guesses!`);
	})
})