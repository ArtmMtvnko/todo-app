import React from 'react';
import { Field } from 'react-final-form';
import { inputStyles } from './input.styles';
import ErrorMessage from '../error-message/error-message.component';

type InputProps = {
	name: string;
	placeholder?: string;
};

const Input: React.FC<InputProps> = ({ name, placeholder }) => {
	return (
		<Field name={name}>
			{({ input, meta }) => (
				<div>
					<input
						className={inputStyles}
						type="text"
						{...input}
						placeholder={placeholder}
					/>
					{meta.error && meta.touched && (
						<ErrorMessage>{meta.error}</ErrorMessage>
					)}
				</div>
			)}
		</Field>
	);
};

export default Input;
