import React from 'react'
import { Provider } from 'react-redux'
import CounterAppRedux from './CounterApp'
import store from './store'
import TransferApp from './TransferApp'

export default function ReactRedux() {
  return (
    <Provider store={store}>
      {/* <CounterAppRedux /> */}
      <TransferApp />
    </Provider>
  )
}