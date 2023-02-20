import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from '../DTO/add_todoDTO';
import { UpdateTodoDto } from '../DTO/update_todoDTO';
import { TodoModel, TodoStatusEnum } from '../models/todoModel';
import { v4 as uuidv4 } from 'uuid';
import { Inject } from '@nestjs/common/decorators';
import { PROVIDER_TOKEN } from 'src/common/common.module';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodoService {

    @Inject(PROVIDER_TOKEN.UUID) uuid;

    private todos: TodoModel[] = [
        {
            id: '1',
            name: 'Acheter du lait',
            description: 'Aller à la supérette du coin pour acheter du lait',
            createdDate: new Date(),
            status: TodoStatusEnum.actif,
        },
        {
            id: '2',
            name: 'Faire du sport',
            description: 'Faire du jogging pendant 30 minutes',
            createdDate: new Date(),
            status: TodoStatusEnum.waiting,
        },
        {
            id: '3',
            name: 'Apprendre NestJS',
            description: 'Faire un tutoriel sur NestJS',
            createdDate: new Date(),
            status: TodoStatusEnum.done,
        },


    ];

    getTodos(): TodoModel[] {
        return this.todos;
    }

    addTodo(newTodo: AddTodoDto): TodoModel {
        const todo: TodoModel = {
            id: this.uuid(),
            ...newTodo,
            createdDate: new Date(),
            status: TodoStatusEnum.waiting,
        };
        this.todos.push(todo);


        return todo;
    }

    getTodoById(id: string): TodoModel {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo)   
            return todo;
        else
            throw new NotFoundException;


    }


    deleteTodoById(id: string): number {
        const taille_initial = this.todos.length;

        if (this.todos.find(todo => todo.id === id)) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            return taille_initial - this.todos.length;
        }
        else return 0;

    }

    updateTodoById(id: string, updatedTodo: UpdateTodoDto): TodoModel {
        const oldTodo = this.todos.find(todo => todo.id === id);

        if (oldTodo) {
            const i = this.todos.findIndex(todo => todo.id === id);
            const todo: TodoModel = {
                id: id,
                name: updatedTodo.name || oldTodo.name,
                description: updatedTodo.description || oldTodo.description,
                createdDate: oldTodo.createdDate,
                status: updatedTodo.status || oldTodo.status,
            };
            this.todos[i] = todo;
            return this.todos[i];
        }

        else throw new NotFoundException;
    }

}
