import { Button, Dialog, DialogBody } from '@blueprintjs/core';
import React from 'react';
import { Todo } from '~shared/types/todo.type';

type TodoModalProps = {
	close: () => void;
	todo: Todo | null;
};

const TodoModal: React.FC<TodoModalProps> = ({ close, todo }) => {
	return (
		<Dialog isOpen={true}>
			<DialogBody>
				<h1>{todo.title}</h1>
				<Button onClick={close}>Close</Button>
			</DialogBody>
		</Dialog>
	);
};

export default TodoModal;
