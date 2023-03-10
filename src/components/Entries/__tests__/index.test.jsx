import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Entries from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  'id': 1,
  'reqAttributes': ['name', 'description'],
  'contentTypeId': 1,
  'removeEntry': jest.fn(),
  'contentTypeName': 'mock title 1',
  'fields': ['name', 'description'],
  'updateEntry': jest.fn(),
  'api': jest.fn(),
  'name': 'name',
  'description': 'description',
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<Entries {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('name')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
