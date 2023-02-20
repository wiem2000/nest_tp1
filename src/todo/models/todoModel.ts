
export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
  }

export class TodoModel {
    id: string;
    name: string;
    description: string;
    createdDate: Date;
    status: TodoStatusEnum;
  }