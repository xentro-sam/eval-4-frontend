import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FieldsContainer from '../index';
import {waitFor} from '@testing-library/dom';
import makeRequest from '../../../utils/makeRequest';
import {act} from 'react-dom/test-utils';

jest.mock('../../../utils/makeRequest');

const mockData = {
  title: 'name',
  fields: ['name', 'age'],
  contentTypeId: 123,
  setFields: jest.fn(),
  setContainerTitle: jest.fn(),
};

describe('ContentType', () => {
  it('should render correctly', async () => {
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = await act( async () => render(<FieldsContainer {...mockData} />));
    await waitFor(() => {
      expect(screen.getByText('Add Another Field')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
