/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
window.alert = () => {};

export { React, TestUtils };
