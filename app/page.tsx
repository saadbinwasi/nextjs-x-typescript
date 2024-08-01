import Image from "next/image";

export default function Home() {
 type Todo = {
  todoId: string;
  todoTitle: string;
  todoCategory: string;
  todoCompeleted: boolean;

  }

  const todos: Todo[] = [
    {todoId: '1',todoTitle: 'go to gym' ,todoCategory: 'health', todoCompeleted:true },
    {todoId: '2',todoTitle: 'study compiler' ,todoCategory: 'studies', todoCompeleted:false },
    {todoId: '3',todoTitle: 'go to doctor' ,todoCategory: 'health', todoCompeleted:true },

  ]
  return (
   <div className="flex flex-col w-full justify-center items-center min-h-screen">
    
    Todo List
    <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow my-4">
      {todos.map((todo,idx) => (
      <div className={`${idx === 0 ? "rounded-t-md" : ""} ${todos.length - 1 === idx ? "rounded-b-md" : ""} bg-gray-800 hover:bg-gray-700 flex w-full justify-between p-4 cursor-pointer `}>
       <div>{todo.todoTitle}</div>
       <div>{todo.todoCategory}</div>
       <div>{todo.todoCompeleted ? "Completed" : "Not Completed" }</div>
    </div>
      ))}
      
    </div>
    </div>
  );
}
