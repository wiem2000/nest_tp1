import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { TodoModel, TodoStatusEnum } from '../models/todoModel';
import { v4 as uuidv4 } from 'uuid';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { AddTodoDto } from '../DTO/add_todoDTO';
import { UpdateTodoDto } from '../DTO/update_todoDTO';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}


@Get()
getTodos():TodoModel[] {
   return this.todoService.getTodos();
}
@Post()
addTodo(@Body() newTodo:AddTodoDto):TodoModel{
    
    return this.todoService.addTodo(newTodo);
}

@Get('/:id')
  getTodoById(@Param('id') id: string): TodoModel {
    return this.todoService.getTodoById(id);
  }

@Delete('/:id')
  deleteTodoById(@Param('id') id: string): number{
   return this.todoService.deleteTodoById(id);

}
@Put('/:id')
  updateTodoById(@Param('id') id: string, @Body() updatedTodo: UpdateTodoDto): TodoModel {
    return this.todoService.updateTodoById(id,updatedTodo);
  }
  



}
