import React from 'react'
import Form from './Form'
import store from './redux/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>welcome home</h1>
        <Form/>
      </Provider>
    </div>
  )
}

export default App