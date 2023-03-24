import React from 'react';
import {
	Article,
	BackgroundDrop,
	Content,
	CloseIconContainer,
	Header,
	Footer
} from '../Modal';
import Button from '../Button';

type Props = {
	children: React.ReactNode;
	title?: string;
	onCloseFn: (event: React.MouseEvent<HTMLElement>) => void;
};

export const InformationModal = ({ children, title, onCloseFn }: Props) => {
	return (
		<>
			<BackgroundDrop onClick={onCloseFn} />
			<Article>
				<Header>
					<span>{title}</span>
					<CloseIconContainer onClick={onCloseFn}>X</CloseIconContainer>
				</Header>
				<Content>{children}</Content>
				<Footer>
					<Button onClick={onCloseFn}>Dismiss</Button>
				</Footer>
			</Article>
		</>
	);
};
