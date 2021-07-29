import { createStore,combineReducers } from "redux";
import { reducer1,reducer2,AuthReducer } from "./reducer";


var reducers = combineReducers({reducer1,reducer2,AuthReducer});

var store = createStore(reducers);

export default store

console.log("store data", store.getState())
// store.subscribe(()=>{
//     console.log('i will call on any event on store',store.getState());
// })

// var storedata = store.getState();
// console.log('initial value of store data',storedata);

// store.dispatch({
//     type:"Dell_desktop"
// })

// store.dispatch({
//     type:"Dell_desktop1"
// })

// store.dispatch({
//     type:"Dell_desktop2"
// })
// var storedata = store.getState();
// console.log('store data',storedata);