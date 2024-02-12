"use client";
import { FunctionComponent } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { createTodoAction } from "@/app/_actions";

interface AddTodoFormProps {}

const AddTodoForm: FunctionComponent<AddTodoFormProps> = () => {
  const handleSubmit = async (data: FormData) => {
    const title = data.get("title");
    if (!title || typeof title === "string") return;
    return await createTodoAction(title);
  };
  return (
    <>
      <h3>Add New Todo</h3>

      <form className="flex" action={handleSubmit}>
        <Input type="text" name="title" placeholder="add todo" />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default AddTodoForm;
