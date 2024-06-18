import React from 'react';
import Slider from 'react-slick';
import { useTodosStore } from '~store/todos.store';
import CarouselCard from './todo-carousel-card.component';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TodoCarousel: React.FC = () => {
	const { todos } = useTodosStore();

	const settings = {
		dots: true,
		arrows: true,
		slidesToShow: 1,
		centerMode: true,
		cssEase: 'ease-in-out',
	};

	return (
		<div>
			<Slider {...settings}>
				{todos.map((todo) => (
					<CarouselCard key={todo.id} todo={todo} />
				))}
			</Slider>
		</div>
	);
};

export default TodoCarousel;
