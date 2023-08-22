import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Puny Closed Newt</title>
        <meta property="og:title" content="Puny Closed Newt" />
      </Helmet>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
