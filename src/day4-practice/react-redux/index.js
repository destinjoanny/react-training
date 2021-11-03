import React from 'react'
import { Provider } from 'react-redux'
// import TodoList from './basic-crud'
import CounterAppRedux from './CounterApp'
import store from './store'
import TodoListRedux from './ToDoListRedux'
import TransferApp from './TransferApp'


export default function ReactRedux() {
  return (
    <Provider store={store}>
      {/* <CounterAppRedux /> */}
      {/* <TransferApp /> */}
      {/* <TodoList /> */}
      <TodoListRedux />
    </Provider>
  )
}