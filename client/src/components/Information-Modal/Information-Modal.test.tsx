import { render, screen } from '@testing-library/react';
import { InformationModal } from './Information-Modal';
import userEvent from '@testing-library/user-event';

describe('Information-Modal', () => {
	describe('When closing', () => {
		let mockedCloseFn: jest.Mock<any, any, any>;

		beforeEach(() => {
			mockedCloseFn = jest.fn();
			render(
				<InformationModal title="Test Modal" onCloseFn={mockedCloseFn}>
					Modal content
				</InformationModal>
			);
		});

		test('Should call closeFn after clicking in dismiss', async () => {
			const user = userEvent.setup();
			await user.click(screen.getByRole('button', { name: 'Dismiss' }));
			expect(mockedCloseFn).toHaveBeenCalledTimes(1);
		});

		test('Should call closeFn after clicking on the X in the header', async () => {
			const user = userEvent.setup();
			await user.click(screen.getByText('X'));
			expect(mockedCloseFn).toHaveBeenCalledTimes(1);
		});

		test('Should call closeFn after clicking on the Backdrop', async () => {
			const user = userEvent.setup();
			await user.click(screen.getByTestId('modal-backdrop'));
			expect(mockedCloseFn).toHaveBeenCalledTimes(1);
		});
	});
});
