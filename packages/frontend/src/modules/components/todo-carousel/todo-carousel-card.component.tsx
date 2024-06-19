import React from 'react';
import TodoAction from '~shared/components/todo-action/todo-action.component';
import { Todo } from '~shared/types/todo.type';
import { CarouselCardStyles, descriptionStyles } from './todo-carousel.styles';
import { useTodoModalStore } from '~store/todo-modal.store';

type CarouselCardProps = {
	todo: Todo;
};

const CarouselCard: React.FC<CarouselCardProps> = ({ todo }) => {
	const { open } = useTodoModalStore();

	return (
		<div className={CarouselCardStyles}>
			<h2 onDoubleClick={() => open(todo, 'Edit')}>{todo.title}</h2>
			<pre className={descriptionStyles}>{todo.content}</pre>
			<TodoAction todo={todo} />
		</div>
	);
};

export default CarouselCard;
