import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const defaultOptions = [
	{ value: 1, label: 'First value' },
	{ value: 2, label: 'Second value' },
	{ value: 3, label: 'Third value' }
];

describe('Dropdown', () => {
	const onChangeMock = jest.fn();

	describe('When first rendering', () => {
		beforeEach(() => {
			render(<Dropdown options={defaultOptions} onChange={onChangeMock} />);
		});

		test('Should render all options', () => {
			expect(screen.getAllByRole('option').length).toBe(defaultOptions.length);
		});
	});
});
