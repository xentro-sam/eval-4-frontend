import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EntrySideModal from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  show: true,
  contentType: 'mock title 1',
  contentTypeId: 1,
  fields: ['name', 'description'],
  onClose: jest.fn(),
  createEntry: jest.fn(),
  updateEntry: jest.fn(),
  api: jest.fn(),
  task: 'New',
  postId: 1,
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<EntrySideModal {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('Add')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
