import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import rgbaEffects from '../../assets/styles/rgba-effects';

type Props = {
	children: string;
	minWidth?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = styled.button<Props>`
	color: ${colors.charcoal};
	cursor: pointer;
	background-color: ${colors.lightBlue};
	border-radius: 10px;
	font-size: 1rem;
	padding: 7px;
	min-width: ${(props) => props.minWidth ?? '100px'};

	&:active {
		color: ${colors.white};
		box-shadow: 3px 2px 22px 1px ${rgbaEffects.boxShadow};
		transform: scale(0.98);
	}
`;

export default ({ children, onClick, minWidth }: Props) => {
	return (
		<Button onClick={onClick} min-width={minWidth}>
			{children}
		</Button>
	);
};
