import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
        <Link to='/countries'>
            <h1>Welcome to HomePage. Click for see countries</h1>
        </Link>
    </div>
  )
}

export default Home