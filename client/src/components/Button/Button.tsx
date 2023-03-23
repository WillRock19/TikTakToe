import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	color: #353a47;
	border-radius: 0.8rem;
	background-color: #87bcde;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
		box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
	}
`;

type Props = {
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default ({ children, onClick }: Props) => {
	return <Button onClick={onClick}>{children}</Button>;
};
