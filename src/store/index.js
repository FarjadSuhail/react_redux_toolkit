import { createStore } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// prepare a slice of our global state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            //imer package
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

// basic redux 
// const counterReducer = (state = initialState, action) => {
//     console.log(action);
//     console.log(state);

//     // we overwrite state
//     // never mutate the existing -- always overwrite it by returning a new state object
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// };

// const store = createStore(counterReducer); 

// if just 1 createSlice then use below method 
//const store = createStore(counterSlice.reducer); 

// for multiple -- for now use below 
const store = configureStore({
    reducer: counterSlice.reducer
});

// returns an action object of this shape:
    // {
    //     type: 'some auto generated unique identifer'
    // }
export const counterActions = counterSlice.actions;
export default store;