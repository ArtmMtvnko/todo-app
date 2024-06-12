import { TodoDtoType } from '@/types/todos.type';
import Joi from 'joi';

const todoSchema = Joi.object<TodoDtoType>({
	title: Joi.string().trim().required(),
	content: Joi.string().trim().required(),
});

export default todoSchema;
