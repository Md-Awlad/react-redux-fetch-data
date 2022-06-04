import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constant/todosConstant";

const initialTodos = {
    todos:[],
    isLoading:false,
    error:null,
}

const todoReducer = (state= initialTodos, action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
           return{
               ...state,
               isLoading:true,
           }
        case GET_TODOS_SUCCESS:
           return{
               isLoading:false,
               todos:action.payload,
               error:null
           }
        case GET_TODOS_FAILED:
           return{
               isLoading:false,
               todos:[],
               error:action.payload
           }
    
        default:
            return state;
    }
}

export default todoReducer;