import React from 'react'
import Header from '../components/Header'
import Landmarks from '../components/Landmarks'
import data from './data'

function App() {

  const destination = data.map(item => {
    return (
      <Landmarks 
        key= {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      {destination}
    </div>
  )
}

export default App
