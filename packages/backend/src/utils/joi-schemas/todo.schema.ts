import { TodoDtoType } from '@/types/todos.type';
import Joi from 'joi';

const todoSchema = Joi.object<TodoDtoType>({
	title: Joi.string().trim().required(),
	content: Joi.string().trim().required(),
	authorId: Joi.number().required(),
	private: Joi.boolean(),
	completed: Joi.boolean(),
});

export default todoSchema;
