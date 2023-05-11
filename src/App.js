import React from 'react'
import "./App.css"
import Header from './components/Header'
import Body from './components/Body'
import Shimmer from './components/Shimmer'

const App = () => {
  return (
    <div className='bg-zinc-900'>
       {/* <Header/>
       <Body/> */}
       <Shimmer/>
    </div>
  )
}

export default App