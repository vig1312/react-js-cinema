import { createSlice } from '@reduxjs/toolkit';


const profileSlice = createSlice({
		name: "profile",
		initialState: {
			username: "",
			password: ""		
		},
	reducers: {
		currentData: (state, action) => {
			state.username = action.name;
		}
	}
})

export const {actions, reducers} = profileSlice


//   export const { addTodo, removeTodo, toggleCompleteTodo, consoleAction } = todoSlice.actions 
   
//   export default todoSlice.reducer
// export const todoSlice = createSlice({ 
//     name: "todos", 
//     initialState: { 
//       todos :[]  
//     }, 
//     reducers: { 
//       addTodo(state,action) { 
//           return { 
//             todos: [ 
//               ...state.todos, 
//               { 
//                 id: Math.random(), 
//                 text: action.payload.text 
//               } 
//             ] 
//           } 
//       }, 
//       removeTodo(state,action) { 
//           return { 
//             ...state, 
//             todos: state.todos.filter(item => item.id !== action.payload.id) 
//           } 
//       }, 
//       toggleCompleteTodo(state,action) { 
//         console.log(action,state) 
//       }, 
//       consoleAction(action,state) { 
//         console.table(state) 
//       } 
//     } 
//   }) 
   
