import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Brand Officer</title>
        <meta property="og:title" content="Investor Brand Officer" />
      </Helmet>
    </div>
  )
}

export default Home
