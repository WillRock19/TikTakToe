import { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import Button from './components/Button';
import InformationModal from './components/Information-Modal';
import { Dropdown } from './components/Dropdown/Dropdown';

const options = [
	{ value: 1, label: 'One' },
	{ value: 10, label: 'Ten' },
	{ value: 100, label: 'Hundred' }
];

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const dropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value);
	};

	return (
		<>
			<GlobalStyle />
			<h1>Hello World! I did it. I&apos;ve actually did it!</h1>

			{showModal && (
				<InformationModal title="Teste" onCloseFn={closeModal}>
					Este é meu teste
				</InformationModal>
			)}

			<Button onClick={() => setShowModal(true)}>Teste</Button>
			<Dropdown onChange={dropdownChange} options={options}></Dropdown>
		</>
	);
};

export default App;
