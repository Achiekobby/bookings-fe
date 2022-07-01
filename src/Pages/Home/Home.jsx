import React from 'react'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import "../../Styles/Css/Home.css"
import PropertyList from './../../components/PropertyList/PropertyList';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
          Browse by property type.
          <PropertyList/>
        </h1>
      </div>
    </div>
  )
}

export default Home