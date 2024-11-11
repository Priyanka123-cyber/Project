import React from 'react'
import Navbar from '../common/Navbar'
import TopSection from './TopSection'
import NewListing from './NewListing'
import Footer from '../common/Footer'
import useGetAllJobs from '../custom/useGetAllJobs'



const Home = () => {

  useGetAllJobs();
  return (
    <div>
        <Navbar/>
        <TopSection/>
        {/* <CategoryCarousel/> */}
        <NewListing/>
        <Footer/>
    </div>
  )
}

export default Home