import GlobalStyle from './GlobalStyles';
import Button from './components/Button';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<h1>Hello World! I did it. I&apos;ve actually did it!</h1>
			<Button onClick={() => console.log('imprimi')}>Teste</Button>
		</>
	);
};

export default App;
