import './App.css';
import { legacy_createStore as createStore } from 'redux';

// action = {
//   type: "PLUS",
//   payload: 5
// }

const intialState = 0;

const counterReducer = (state = intialState, action)=>{
  switch(action.type){
    case 'PLUS':{
      return state + (action.payload)
    }
    case 'MINUS':{
      return state - (action.payload)
    }
    default:{
      return state
    }
  }
}


const store = createStore(counterReducer)

const currentState = store.getState()

console.log("State Before ", currentState)

store.dispatch({ type:'PLUS', payload:2})

const dispatch_1 = store.getState()

console.log("State After dispatch 1 ", dispatch_1)

store.dispatch({ type:'MINUS', payload:1})

const dispatch_2 = store.getState()

console.log("State After dispatch 2 ", dispatch_2)

function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;