// initial state me todos empty rehna and search bhi empty rehna aur sabbi filter hoko rehna

import { ADD_TODO,FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from '../Action/actionType'
const initialState = {
    todos:[],
    filter:'ALL',
    search:''
}

const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                todos: [...state.todos,{
                    text:action.payLoad.text,completed:false
                }],
                filter:state.filter,  //same value rehna so jab add karti tab
                search:state.search   // same value rehna sabse upper refer karo 
            }
            case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index)=> index ===action.payLoad.id ?
                {...todo, completed:!todo.completed} : todo
            ),
                filter:state.filter,  
                search:state.search   
            }
            case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo, index)=> index !==action.payLoad.id 
            ),
                filter:state.filter,  
                search:state.search   
            }  
            case MARK_COMPLETED_TODO:
            return {
                todos: state.todos.map((todo, index)=> index ===action.payLoad.id ?
                {...todo, completed:true} : todo
            ),
                filter:state.filter,  
                search:state.search   
            }
            case MARK_INCOMPLETE_TODO:
            return {
                todos: state.todos.map((todo, index)=> index ===action.payLoad.id ?
                {...todo, completed:false} : todo
            ),
                filter:state.filter,  
                search:state.search   
            }
            case FILTER_TODO:
            return {
                todos: state.todos,
                filter:action.payLoad.filter,  
                search:state.search   
            }
            case SEARCH_TODO:
            return {
                todos: state.todos,
                filter:state.filter,  
                search:action.payLoad.search   
            }
            case MARK_ALL_COMPLETED_TODO:
            return {
                todos: state.todos.map((todo)=> (
                {...todo, completed:true}),
                ),
                filter:state.filter,  
                search:state.search   
            }
            default:
                return state;
    }

}

export default todoReducer;