import { TodoDto } from '~shared/types/todo.type';
import Joi from 'joi';

const todoSchema = Joi.object<TodoDto>({
	title: Joi.string().trim().max(70).required(),
	content: Joi.string().trim().max(1000).required(),
	authorId: Joi.number().required(),
	private: Joi.boolean(),
	completed: Joi.boolean(),
});

export default todoSchema;
