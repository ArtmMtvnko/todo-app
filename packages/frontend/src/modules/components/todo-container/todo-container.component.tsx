import React from 'react';
import TodoList from '../todo-list/todo-list.component';
import TodoCarousel from '../todo-carousel/todo-carousel.component';
import TodoTable from '../todo-table/todo-table.component';
import { useMediaQuery } from 'react-responsive';

const TodoContainer: React.FC = () => {
	const isDesktop = useMediaQuery({
		minWidth: 768,
	});

	const isMobile = useMediaQuery({
		maxWidth: 425,
	});

	const isTablet = useMediaQuery({
		minWidth: 425,
		maxWidth: 768,
	});

	return (
		<>
			{isMobile && <TodoList />}
			{isTablet && <TodoCarousel />}
			{isDesktop && <TodoTable />}
		</>
	);
};

export default TodoContainer;
