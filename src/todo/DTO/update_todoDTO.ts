import { TodoStatusEnum } from "../models/todoModel";



export class UpdateTodoDto{
    name: string;
    description: string;
    status: TodoStatusEnum;
  }