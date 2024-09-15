// in redux we have two things one usedispatch it will send all the actions to store and to access the data from store will use useSelectior

import { useDispatch, useSelector } from "react-redux"
import { filterTodo, markAllCompletedTodo } from "../Redux/Action/action";

function FilterButton() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state => state.filter))
    const handleFilter = (filter) =>{
        dispatch(filterTodo(filter))
    }

  return (
    <div className="flex space-x-4 items-center">
      <select value={currentFilter} onChange={(e)=>handleFilter(e.target.value)} className="text-sm px-2 py-1 border-blue-300 focus:outline-none">
        <option value='ALL'>Default </option>
        <option value='COMPLETED'>Completed </option>
        <option value='INCOMPLETE'>Incomplete </option>
        </select>
        <button onClick={()=>dispatch(markAllCompletedTodo())} className="text-sm px-2 py-1 bg-blue-500 rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton
