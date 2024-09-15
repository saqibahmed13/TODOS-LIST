import { useMemo } from "react";
import { useSelector } from "react-redux"
import TodoItems from "./TodoItems";

const List = () => {
   const filterTodos = useSelector((state)=>{
    return state.todos;
   });
   const filter = useSelector((state)=>{
    return state.filter;
   });
   const search = useSelector((state)=>{
    return state.search;
   });
// useMemo is used when we are filtering soo many things it will prevent from rerendering again and again

   const filteredTodos = useMemo(()=>{
    return filterTodos.filter((todo)=>{
        const matchFilter = (filter=== 'COMPLETED' && todo.completed)  ||  (filter=== 'INCOMPLETE' && !todo.completed) || (filter==='ALL');
        const matchSearch = todo.text.includes(search)
        return matchFilter && matchSearch;
    });
   },[filterTodos,filter,search]);
   return (
    <ul>
        {
            filteredTodos.map((todo,i)=>(
                <TodoItems key={i} todo={todo} index={i}/>
            ))
        }
    </ul>
   )

}

export default List
