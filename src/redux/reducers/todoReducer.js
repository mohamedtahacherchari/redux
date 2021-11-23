
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../constants/todoTypes';

const initialState = []

export const todoReducer =(state=initialState, {type ,payload})=> {
    switch (type) {
        case ADD_TASK :
            return[...state, payload]
      
        case EDIT_TASK:
            return state.map((todo)=> todo.id === payload.id ? {...todo, text : payload.text} : todo)
   
           case DELETE_TASK:
            return    state.filter((todo)=> todo.id !== payload)
               
        default:
            break;
    }
}