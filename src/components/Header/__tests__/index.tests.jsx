import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../index';
import {waitFor} from '@testing-library/dom';
import {act} from 'react-dom/test-utils';

const mockData = {
  title: 'Test Title',
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    const {asFragment} = await act( async () => render(<Header {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
