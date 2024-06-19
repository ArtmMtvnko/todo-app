import { Button, Dialog, DialogBody } from '@blueprintjs/core';
import React from 'react';
import TodoForm from '../todo-form/todo-form.component';
import { dialogStyles } from './todo-modal.styles';
import { useTodoModalStore } from '~store/todo-modal.store';

const TodoModal: React.FC = () => {
	const { close } = useTodoModalStore();

	return (
		<Dialog isOpen={true} className={dialogStyles}>
			<DialogBody>
				<TodoForm />
				<Button onClick={close}>Close</Button>
			</DialogBody>
		</Dialog>
	);
};

export default TodoModal;
