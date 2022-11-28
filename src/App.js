import React from 'react'
import Home from './home'
import {Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store'

import Favourites from './favourites'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
      </Routes>
      
    </Provider>
  )
}

export default App