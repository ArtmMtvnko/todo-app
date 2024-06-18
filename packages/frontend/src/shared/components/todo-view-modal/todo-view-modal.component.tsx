import { Button, Dialog, DialogBody, Switch } from '@blueprintjs/core';
import React from 'react';
import { Todo } from '~shared/types/todo.type';
import {
	switcherStyles,
	descriptionStyles,
	modalInfoStyles,
} from './todo-view-modal.styles';
import { useTodosStore } from '~store/todos.store';

type TodoViewModalProps = {
	close: () => void;
	todo: Todo | null;
};

const TodoViewModal: React.FC<TodoViewModalProps> = ({ close, todo }) => {
	const [completed, setCompleted] = React.useState(todo.completed);
	const [isPrivate, setIsPrivate] = React.useState(todo.private);
	const { updateTodo } = useTodosStore();

	const changeCompletion = (): void => {
		setCompleted(!completed);
		updateTodo(todo.id, {
			title: todo.title,
			content: todo.content,
			completed: !completed,
			private: isPrivate,
			authorId: todo.authorId,
		});
	};

	const changePrivate = (): void => {
		setIsPrivate(!isPrivate);
		updateTodo(todo.id, {
			title: todo.title,
			content: todo.content,
			completed: completed,
			private: !isPrivate,
			authorId: todo.authorId,
		});
	};

	return (
		<Dialog isOpen={true}>
			<DialogBody>
				<div className={modalInfoStyles}>
					<h1>{todo.title}</h1>
					<div>
						<p>Description:</p>
						<pre className={descriptionStyles}>{todo.content}</pre>
					</div>
					<p>
						Comptele:
						<Switch
							onChange={changeCompletion}
							checked={completed}
							large={true}
							className={switcherStyles}
						/>
					</p>
					<p>
						Private:
						<Switch
							onChange={changePrivate}
							checked={isPrivate}
							large={true}
							className={switcherStyles}
						/>
					</p>
					<Button className="close-btn" onClick={close}>
						Close
					</Button>
				</div>
			</DialogBody>
		</Dialog>
	);
};

export default TodoViewModal;
