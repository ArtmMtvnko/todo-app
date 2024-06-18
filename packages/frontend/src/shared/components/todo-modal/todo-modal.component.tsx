import { Button, Dialog, DialogBody } from '@blueprintjs/core';
import React from 'react';
import TodoForm from '../todo-form/todo-form.component';
import { TodoDto } from '~shared/types/todo.type';
import { dialogStyles } from './todo-modal.styles';

type TodoModalProps = {
	actionName: string;
	action: (todo: TodoDto) => void;
	isOpen: boolean;
	setShownState: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoModal: React.FC<TodoModalProps> = ({
	actionName,
	action,
	isOpen,
	setShownState,
}) => {
	return (
		<Dialog isOpen={isOpen} className={dialogStyles}>
			<DialogBody>
				<TodoForm
					actionName={actionName}
					action={action}
					setShownState={setShownState}
				/>
				<Button onClick={() => setShownState(false)}>Close</Button>
			</DialogBody>
		</Dialog>
	);
};

export default TodoModal;
