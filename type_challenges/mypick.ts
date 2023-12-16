interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type SomeDescription = MyPick<Todo, 'description'>;

const description: SomeDescription = {
  description: 'text',
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
