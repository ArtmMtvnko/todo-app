import { Button, Dialog, DialogBody } from '@blueprintjs/core';
import React from 'react';
import TodoForm from '../todo-form/todo-form.component';

type TodoModalProps = {
	actionName: string;
	isOpen: boolean;
	setShownState: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoModal: React.FC<TodoModalProps> = ({
	actionName,
	isOpen,
	setShownState,
}) => {
	return (
		<Dialog isOpen={isOpen}>
			<DialogBody>
				{/* TODO: Make form validation, add styles for form */}
				<TodoForm
					actionName={actionName}
					setShownState={setShownState}
				/>
				<Button onClick={() => setShownState(false)}>Close</Button>
			</DialogBody>
		</Dialog>
	);
};

export default TodoModal;
