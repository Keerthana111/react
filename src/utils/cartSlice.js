import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla redux (older version) ==> "Don't mutate the state"
      {
        /*const newState = [...state];
            newState = newState.items.push(action.payload);
            return newState; */
      }
      //mutating the state --> means we can directly make changes to the state because redux toolkit uses Immer behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
        //RTK says you either have to mutate the state or return a newState so you can do it both ways as shown below
      state.items.length = 0;
      //return {items: []};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
