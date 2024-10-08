import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Customers from './customers';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Customers component', () => {
  const wrapper = render(<Customers />);
  expect(wrapper).toBeTruthy();
});