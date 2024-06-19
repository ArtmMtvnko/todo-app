import React from 'react';
import { Field } from 'react-final-form';
import { checkBoxStyles } from './checkbox.styles';
import ErrorMessage from '../error-message/error-message.component';

type CheckBoxProps = {
	name: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({ name }) => {
	return (
		<Field name={name} type="checkbox">
			{({ input, meta }) => (
				<div>
					<input
						className={checkBoxStyles}
						type="checkbox"
						{...input}
					/>
					{meta.error && meta.touched && (
						<ErrorMessage>{meta.error}</ErrorMessage>
					)}
				</div>
			)}
		</Field>
	);
};

export default CheckBox;
