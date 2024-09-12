import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Reservations from './reservations';
import 'element-internals-polyfill';

test('renders Reservations component', () => {
  const wrapper = render(<Reservations />);
  expect(wrapper).toBeTruthy();
});