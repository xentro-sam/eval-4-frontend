import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewContentTypeModal from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  onClose: jest.fn(),
  show: true,
  setContentTypes: jest.fn(),
  setCollectionTypes: jest.fn(),
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<NewContentTypeModal {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('Name of the content type')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
