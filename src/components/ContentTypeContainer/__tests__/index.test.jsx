import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentTypeContainer from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  setFields: jest.fn(),
  setContainerTitle: jest.fn(),
  setCollectionTypes: jest.fn(),
  setContentTypeId: jest.fn(),
};

const mockResponse = [{
  id: 1,
  contentTypeName: 'mock title 1',
}];

const mockPromise = Promise.resolve(mockResponse);

describe('ContentType', () => {
  it('should render correctly', async () => {
    makeRequest.mockImplementation(() => mockPromise);
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<ContentTypeContainer {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('+ New Type')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
    expect(makeRequest).toBeCalled();
  });
});
