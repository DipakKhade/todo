import { FunctionComponent } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TodoItem from "@/components/TodoItems";
import AddTodoForm from "@/components/AddTodoForm";

interface HomeProps {
  
}

const Home: FunctionComponent<HomeProps> = async() => {



  return ( <>
  <MaxWidthWrapper className="p-12">

  <h2 className="text-2xl font-bold p-3">Todos</h2>

<AddTodoForm/>
  <div className="text-xl mt-12 font-semibold">Previous todos</div>
 <TodoItem/>
    </MaxWidthWrapper>
  
  
  </> );
}
 
export default Home;