import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
import img from '../assets/avin.jpeg'

const Index = () => {
  return (
    <>
      <nav>
        <Link to={'/Add'}><button>Add Employee</button></Link>
      </nav>
      <div className="container">
        <Link to={'/Prof'} className='A1'>
        <div className="card">
            <div><img src={img} alt="" /></div>
            <div className='div'>Name:</div>
            <div className='div'>Des:</div>
        </div></Link>
      </div>
</>
  )
}

export default Index