import { FunctionComponent } from "react";
import { getTodos } from "@/lib/todo";

interface TodoItemProps {
    
}
 
const TodoItem: FunctionComponent<TodoItemProps> =async () => {
    const {todos} =await getTodos()
    console.log({todos})
    return ( <>
    
    <div>
    {
    todos?.map((todo,index)=>(
      <ul key={index}>{todo.title}</ul>
      ))
    }
    </div>

    </> );
}
 
export default TodoItem;