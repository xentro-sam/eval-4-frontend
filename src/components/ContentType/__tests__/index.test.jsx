import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentType from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  contentTypeName: 'mock title 1',
  id: 1,
  setFields: jest.fn(),
  setContainerTitle: jest.fn(),
  setContentTypeId: jest.fn(),
};

const mockResponse = [
  'mock title 1',
  'mock title 2',
  'mock title 3',
];

describe('ContentType', () => {
  it('should render correctly', async () => {
    makeRequest.mockResolvedValueOnce(mockResponse);
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<ContentType {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('mock title 1')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
    expect(makeRequest).toBeCalledTimes(1);
  });
});
