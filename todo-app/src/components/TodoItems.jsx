import React from "react";
import { useDispatch } from "react-redux";
import  {BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { markCompletedTodo, markIncompleteTodo, removeTodo } from "../Redux/Action/action";

function TodoItems({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col md:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center flex-wrap">
        <span className="mr-4 text-blue-500">{index + 1}</span>
        {/* for below line will give conditional styling by using tild operator `` */}
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-blue-500" : " "
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex-space-x-3 ml-8">
        <button
          onClick={() => dispatch(toggleTodo.Todo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {todo.completed ? <BsToggleOff /> : <BsToggleOn />}
        </button>
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
        >
          <FaTrash />
        </button>
        {!todo.completed && (
            <button className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded" onClick={()=>dispatch(markCompletedTodo(index))}> 
            <ImCross />
            </button>
        )}
        {todo.completed && (
            <button className="mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded" onClick={()=>dispatch(markIncompleteTodo(index))}> 
            <FaCheck />
            </button>
        )}
      </div>
    </li>
  );
}

export default TodoItems;
