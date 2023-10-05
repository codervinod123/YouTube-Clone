import React from 'react'
import "./App.css"
import Header from './components/Header'
import Body from "./components/Body"
import store from './utils/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
     <div className='bg-zinc-900'>
       <Header/>
       <Body/>
     </div>
     </Provider>
   

  )
}

export default App