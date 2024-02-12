import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todos.findMany();
    return { todos };
    console.log({todos})
  } catch (error) {
    console.log(error);
  }
}

getTodos()
export async function createTodo(title: string) {
  try {
    const todo = await prisma.todos.create({ data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}
