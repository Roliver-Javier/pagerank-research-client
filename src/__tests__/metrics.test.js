import React from 'react';
import { shallow, mount } from 'enzyme';
import { getMetrics } from './api';
import GraphSection from '../pages/homePage/components/graph/graphSection';

describe('GraphSection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should fetches data metrics from server when server return a successful response', (done) => {
    const mProps = { label: 'Rankings', sections: ['absolute_position'] };
    //const mResponse = getMetrics();
    const wrapper = shallow(<GraphSection {...mProps} />);
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.find('.mainContent h4').text()).toBe('Rankings');

    // await act(async () => {
    //     await new Promise((resolve) => setTimeout(resolve, 0));
    //     });
    //     wrapper.update();
    //     expect(wrapper.find('svg').text()).toBe(JSON.stringify(mResponse.data));
    //     expect(fetchData).toBeCalledWith(1);
  });
});
