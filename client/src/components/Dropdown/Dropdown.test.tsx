import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

const defaultOptions = [
	{ value: 1, label: 'First value' },
	{ value: 2, label: 'Second value' },
	{ value: 3, label: 'Third value' }
];

describe('Dropdown', () => {
	let onChangeMock: jest.Mock<any, any, any>;

	describe('When rendering without a default option selected', () => {
		beforeEach(() => {
			onChangeMock = jest.fn();
			render(<Dropdown options={defaultOptions} onChange={onChangeMock} />);
		});

		test('Should set first option as selected', () => {
			expect(
				(
					screen.getByRole('option', {
						name: 'First value'
					}) as HTMLOptionElement
				).selected
			).toBeTruthy();
		});

		test('Should render all options', () => {
			expect(screen.getAllByRole('option').length).toBe(defaultOptions.length);
		});

		test('Should allow to select a different option', async () => {
			await userEvent.selectOptions(
				screen.getByRole('combobox'),
				screen.getByRole('option', { name: 'Third value' })
			);

			expect(
				(
					screen.getByRole('option', {
						name: 'Third value'
					}) as HTMLOptionElement
				).selected
			).toBeTruthy();
		});

		test('Should call onChange function after selecting a value', async () => {
			await userEvent.selectOptions(
				screen.getByRole('combobox'),
				screen.getByRole('option', { name: 'Third value' })
			);

			expect(onChangeMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('When rendering with a default option', () => {
		beforeEach(() => {
			onChangeMock = jest.fn();
			render(
				<Dropdown
					options={defaultOptions}
					onChange={onChangeMock}
					defaultValue={2}
				/>
			);
		});

		test('Should set the default option as selected', () => {
			expect(
				(
					screen.getByRole('option', {
						name: 'Second value'
					}) as HTMLOptionElement
				).selected
			).toBeTruthy();
		});

		test('Should allow to select a different option', async () => {
			await userEvent.selectOptions(
				screen.getByRole('combobox'),
				screen.getByRole('option', { name: 'First value' })
			);

			expect(
				(
					screen.getByRole('option', {
						name: 'First value'
					}) as HTMLOptionElement
				).selected
			).toBeTruthy();
		});
	});
});
