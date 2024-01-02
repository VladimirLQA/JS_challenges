interface Todo {
  title: string;
  description: string;
  comleted: boolean;
  meta: {
    author: string;
  };
}

type MyReadonly<TInput> = {
  readonly [Key in keyof TInput]: TInput[Key];
};

type Result = MyReadonly<Todo>;

// TODO to go level deeper
{
  type MyReadonly<TInput> = {
    readonly [Key in keyof TInput]: TInput[Key] extends object
      ? MyReadonly<TInput[Key]>
      : TInput[Key];
  };

  type Result = MyReadonly<Todo>;
}
