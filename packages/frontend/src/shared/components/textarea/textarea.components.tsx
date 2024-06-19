import React from 'react';
import { Field } from 'react-final-form';
import { textAreaStyles } from './textarea.styles';
import ErrorMessage from '../error-message/error-message.component';

type TextAreaProps = {
	name: string;
	placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder }) => {
	return (
		<Field name={name}>
			{({ input, meta }) => (
				<div>
					<textarea
						className={textAreaStyles}
						{...input}
						name={name}
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

export default TextArea;
