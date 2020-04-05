import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Badge from './Badge';

const label = '6';

it(`<Badge> should render a label with the text "6"`, () => {
  const BadgeSnapshot = renderer.create(<Badge label={label} />).toJSON();
  expect(BadgeSnapshot).toMatchSnapshot();
});

it('should display the correct text when rendered', () => {
  const { getByText } = render(<Badge label={label} />);
  const BadgeContent = getByText(label);
  expect(BadgeContent).toBeTruthy();
});

describe('when sup is:', () => {
  it('true, should have a top property', () => {
    const { getByRole } = render(<Badge label={label} sup />);
    const badgeContainer = getByRole('presentation');
    const { top } = getComputedStyle(badgeContainer);
    expect(top).toBeTruthy();
  });

  it('false, should not have a top property', () => {
    const { getByRole } = render(<Badge label={label} sup={false} />);
    const badgeContainer = getByRole('presentation');
    const { top } = getComputedStyle(badgeContainer);
    expect(top).toBeFalsy();
  });
});