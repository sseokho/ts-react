import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface Counter {
  count : number
  user : string
}

const 초기값 :Counter = { count: 0, user : 'kim' };

const counterSlice = createSlice({
    name : 'counter',
    initialState : 초기값,
    reducers: {
      증가 (state){
        state.count += 1
      },
      감소 (state){
        state.count -= 1
      },
      맘대로증가 (state:Counter, action:PayloadAction<number>){
        state.count += action.payload
      }
    }
})

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export let {증가, 감소, 맘대로증가} = counterSlice.actions


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);