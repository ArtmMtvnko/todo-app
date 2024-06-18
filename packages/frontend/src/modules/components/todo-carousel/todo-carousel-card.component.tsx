import React from 'react';
import TodoAction from '~shared/components/todo-action/todo-action.component';
import { Todo } from '~shared/types/todo.type';
import { CarouselCardStyles, descriptionStyles } from './todo-carousel.styles';

type CarouselCardProps = {
	todo: Todo;
};

const CarouselCard: React.FC<CarouselCardProps> = ({ todo }) => {
	return (
		<div className={CarouselCardStyles}>
			<h2>{todo.title}</h2>
			<pre className={descriptionStyles}>{todo.content}</pre>
			<TodoAction todo={todo} />
		</div>
	);
};

export default CarouselCard;
