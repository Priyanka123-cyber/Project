import React from 'react'
import Navbar from '../common/Navbar'
import TopSection from './TopSection'
import NewListing from './NewListing'
import Footer from '../common/Footer'




const Home = () => {

  return (
    <div>
        <Navbar/>
        <TopSection/><br />
        <NewListing/>
        <Footer/>
    </div>
  )
}

export default Home