import { createStore } from "redux";
import counterSlice from "./slice/counter-slice";
import authSlice from "./slice/auth-slice";
// // // // import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

// // // // const initialCounterState = { counter: 0, showCounter: true };

// // // // // prepare a slice of our global state
// // // // const counterSlice = createSlice({
// // // //     name: 'counter',
// // // //     initialState: initialCounterState,
// // // //     reducers: {
// // // //         increment(state) {
// // // //             //imer package
// // // //             state.counter++;
// // // //         },
// // // //         decrement(state) {
// // // //             state.counter--;
// // // //         },
// // // //         increase(state, action) {
// // // //             state.counter = state.counter + action.payload;
// // // //         },
// // // //         toggleCounter(state) {
// // // //             state.showCounter = !state.showCounter;
// // // //         },
// // // //     }
// // // // });

// // // // const initialAuthState = {
// // // //     isAuthenticated: false
// // // // }
// // // // console.log(initialAuthState);

// // // // const authSlice = createSlice({
// // // //     name: 'authentication',
// // // //     initialState: initialAuthState,
// // // //     reducers: {
// // // //         login(state) {
// // // //             console.log(state);
// // // //             console.log("aaaaaaaaaaaaaaaaa");
// // // //             state.isAuthenticated = true;
// // // //         },
// // // //         logout(state) {
// // // //             state.isAuthenticated = false;
// // // //         }
// // // //     }
// // // // });

// if just 1 createSlice then use below method 
//const store = createStore(counterSlice.reducer); 

// for multiple -- for now use below 
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    },    
});

// returns an action object of this shape:
    // {
    //     type: 'some auto generated unique identifer'
    // }
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;