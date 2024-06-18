import { Button, Dialog, DialogBody } from '@blueprintjs/core';
import React from 'react';
import { Todo } from '~shared/types/todo.type';
import { descriptionStyles } from './todo-view-modal.styles';

type TodoViewModalProps = {
	close: () => void;
	todo: Todo | null;
};

const TodoViewModal: React.FC<TodoViewModalProps> = ({ close, todo }) => {
	return (
		<Dialog isOpen={true}>
			<DialogBody>
				<h1>{todo.title}</h1>
				<p>Description:</p>
				<pre className={descriptionStyles}>{todo.content}</pre>
				<p>Comptele: {todo.completed.toString()}</p>
				<p>Private: {todo.private.toString()}</p>
				<Button onClick={close}>Close</Button>
			</DialogBody>
		</Dialog>
	);
};

export default TodoViewModal;
