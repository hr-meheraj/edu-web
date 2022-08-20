import React from 'react'
import Footer from '../../shared/Footer'
import Header from './Header'
import PopularTopic from './PopularTopic'
import Recommend from './Recommend'
import Service from './Service'

function HelpCenter() {
  return (
    <main>
          <Header/>
          <Recommend/>
          <PopularTopic/>
          <Service/>
          <Footer/>  
    </main>
  )
}

export default HelpCenter