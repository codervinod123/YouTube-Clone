import React from 'react'
import "./App.css";
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
   <div>
      <Header/>
      <Body/>
   </div>
  )
}

export default App


/*
Header
     hamberger
     Logo
     Search icon and field
     Profile icon and details
  Sidebar
     Home
     Subscription
     Channels
  Main Body
      Categories Buttons
      Main body for vedio Container
          vedio cards--> by clicking  it will open up a different page for playing vedio on a new page (/watch)
            vedio image
            watch count
            Day of posting

           /watch
                 playing vedio
                 comments
                 suggestion vedio

*/