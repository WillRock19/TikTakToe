import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import rgbaEffects from '../../assets/styles/rgba-effects';

export const BackgroundDrop = styled.div`
	background-color: ${rgbaEffects.translucidBackground};
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 0;
`;

export const Article = styled.article`
	display: flex;
	background: ${colors.white};
	border-radius: 1rem;
	box-shadow: 0 5px 20px 0 ${rgbaEffects.boxShadow};
	color: ${colors.charcoal};
	flex-direction: column;
	justify-content: space-between;
	min-width: 33%;
	min-height: 30%;
	z-index: 10;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Header = styled.header`
	align-items: center;
	background: ${colors.orange};
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;
	font-weight: bold;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	min-height: 50px;
	padding: 0.8rem;
`;

export const Content = styled.section`
	color: ${colors.charcoal};
	min-height: 150px;
	padding: 20px;
	text-align: center;
`;

export const CloseIconContainer = styled.span`
	font-size: 1.4rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 20px -10px ${rgbaEffects.boxShadow};
		transform: translateY(5px);
	}
`;

export const Footer = styled.footer`
	display: flex;
	min-height: 40px;
	justify-content: flex-end;
	right: 0;
	padding: 0.5rem;
`;
