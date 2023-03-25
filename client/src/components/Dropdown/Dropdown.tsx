import React, { useState } from 'react';

import colors from '../../assets/styles/colors';
import styled from 'styled-components';

type OptionValue = string | number;

type Option = {
	value: OptionValue;
	label: string;
};

type Props = {
	name?: string;
	options: Option[];
	defaultValue?: OptionValue;
	placeholder?: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select = styled.select`
	cursor: pointer;
	border-radius: 5px;
	border: solid 2px ${colors.lightGray};
	min-width: 300px;
	padding: 5px;
`;

const Option = styled.option``;

export const Dropdown = ({
	name,
	options,
	defaultValue,
	placeholder,
	onChange
}: Props) => {
	const [selectedValue, setSelectedValue] = useState(
		defaultValue ?? options[0].value
	);

	const onChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.currentTarget.value);
		onChange(event);
	};

	return (
		<Select
			name={name ?? ''}
			value={selectedValue}
			placeholder={placeholder ?? ''}
			onChange={onChangeOption}
		>
			{options.map((option) => (
				<Option value={option.value} key={option.value}>
					{option.label}
				</Option>
			))}
		</Select>
	);
};
