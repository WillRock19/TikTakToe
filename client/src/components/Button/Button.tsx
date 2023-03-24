import styled from 'styled-components';
import colors from '../../assets/styles/colors';

type Props = {
	children: string;
	minWidth?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = styled.button<Props>`
	color: ${colors.charcoal};
	cursor: pointer;
	background-color: ${colors.lightBlue};
	border-radius: 0.5rem;
	font-size: 1rem;
	padding: 10px;
	min-width: ${(props) => props.minWidth ?? '5rem'};

	&:active {
		color: ${colors.white};
		box-shadow: 3px 2px 22px 1px ${colors.boxShadow};
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
