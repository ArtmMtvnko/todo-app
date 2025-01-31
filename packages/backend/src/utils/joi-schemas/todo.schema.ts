import { TodoDtoType } from '@/types/todos.type';
import Joi from 'joi';

const todoSchema = Joi.object<TodoDtoType>({
	title: Joi.string().trim().max(70).required(),
	content: Joi.string().trim().max(1000).required(),
	authorId: Joi.number().required(),
	private: Joi.boolean(),
	completed: Joi.boolean(),
});

export default todoSchema;
