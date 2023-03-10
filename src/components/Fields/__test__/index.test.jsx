import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Fields from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  fieldName: 'name',
  fieldType: 'text',
  contentTypeId: 1,
  removeField: jest.fn(),
  renameFields: jest.fn(),
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<Fields {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('text')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
