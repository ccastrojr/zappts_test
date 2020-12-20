import React from 'react';

import { render, waitFor, fireEvent } from '@testing-library/react';

import App from '../App';

describe('Test for Login Component', () => {
  it('Should logon on application when form has been submited', async () => {
    const { getByTestId } = render(<App />);
    const fieldNode = await waitFor(() => getByTestId('form-node'));

    const email = 'claudio@email.com';
    const password = 'claudio'

    fireEvent.change(
      fieldNode,
      {
        target: {
          email,
          password,
        },
      },
    );

    expect(fieldNode.email).toEqual(email);
    expect(fieldNode.email).toContain('@');
    expect(fieldNode.email).toContain('.com');

    expect(fieldNode.password).toEqual(password);

    const btnNode = await waitFor(() => getByTestId('form-btn'));
    fireEvent.click(btnNode);
  });
});

describe('Test for Sign Up Component', () => {
  it('Should register when form has been submited', async () => {
    const { getByTestId } = render(<App />);
    const fieldNode = await waitFor(() => getByTestId('form-node'));

    const fullname = 'Claudio Castro';
    const email = 'claudio@email.com';
    const password = 'claudio';

    fireEvent.change(
      fieldNode,
      {
        target: {
          fullname,
          email,
          password,
        },
      },
    );

    expect(fieldNode.fullname).toEqual(fullname);

    expect(fieldNode.email).toEqual(email);
    expect(fieldNode.email).toContain('@');
    expect(fieldNode.email).toContain('.com');

    expect(fieldNode.password).toEqual(password);

    const btnNode = await waitFor(() => getByTestId('form-btn'));
    fireEvent.click(btnNode);
  });
});
