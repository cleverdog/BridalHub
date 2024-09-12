import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Planners from './planners';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Planners component', () => {
  const wrapper = render(<Planners />);
  expect(wrapper).toBeTruthy();
});