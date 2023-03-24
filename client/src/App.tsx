import { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import Button from './components/Button';
import InformationModal from './components/Information-Modal';

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
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
		</>
	);
};

export default App;
