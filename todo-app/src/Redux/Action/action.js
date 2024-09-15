// in action function we pass two things one is a type another one is data we can give anything in place of payload

import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionType";

export const addTodo = (text) =>({
    type: ADD_TODO,
    payLoad:{text}
})
export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    payLoad:{id}
})
export const removeTodo = (id) =>({
    type: REMOVE_TODO,
    payLoad:{id}
})
export const markCompletedTodo = (id) =>({
    type: MARK_COMPLETED_TODO,
    payLoad:{id}
})
export const markAllCompletedTodo = () =>({
    type: MARK_ALL_COMPLETED_TODO,
  
})
export const markIncompleteTodo = (id) =>({
    type: MARK_INCOMPLETE_TODO,
    payLoad:{id}
})
export const filterTodo = (filter) =>({
    type: FILTER_TODO,
    payLoad:{filter}
})
export const updateSearchTodo = (search) =>({
    type: SEARCH_TODO,
    payLoad:{search}
})