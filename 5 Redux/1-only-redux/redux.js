// Importing the Redux library
const redux = require("redux");

// Initial state object with a default value for the counter
const INITIAL_VALUE = {
  counter: 0,
};

// Reducer function to handle state updates based on the action type
const reducer = (store = INITIAL_VALUE, action) => {
  // Initialize a newStore variable to store the updated state
  let newStore = store;
  
  // Action type: INCREMENT - Increases the counter by 1
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } 
  // Action type: DECREMENT - Decreases the counter by 1
  else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } 
  // Action type: ADDITION - Adds the value from the payload to the counter
  else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.value };
  }

  // Return the updated state (newStore)
  return newStore;
};

// Creating the Redux store with the reducer function
const store = redux.createStore(reducer);

// Subscriber function that will be called when the state changes
const subscriber = () => {
  const state = store.getState(); // Get the current state from the store
  console.log(state); // Log the current state to the console
};

// Subscribing to state changes, calling the subscriber function when the state is updated
store.subscribe(subscriber);

// Dispatching an action of type "INCREMENT" to increase the counter by 1
store.dispatch({
  type: "INCREMENT",
});

// Dispatching an action of type "DECREMENT" to decrease the counter by 1
store.dispatch({
  type: "DECREMENT",
});

// Dispatching an action of type "ADDITION" to add 10 to the counter
store.dispatch({
  type: "ADDITION",
  payload: {
    value: 10, // Value to be added to the counter
  },
});
