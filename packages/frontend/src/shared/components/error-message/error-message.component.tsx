import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { errorMessageStyles } from './error-message.styles';

type ErrorMessageProps = {
	children: string;
	duration?: number;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
	children,
	duration = 5000,
}) => {
	React.useEffect(() => {
		toast(children, {
			autoClose: duration,
		});
	});

	return <ToastContainer className={errorMessageStyles} />;
};

export default ErrorMessage;
