import React from 'react'
import './Badges.css'
import Bronze from '../../Assets/bronze.png'
import Gold from '../../Assets/gold.png'
import Silver from '../../Assets/silver.png'


const Badges = () => {
  return (
    <div className="badge">
      <div className="title-bar">
        <div className="title">
            EZ Badges
        </div>
      </div>

      <div className="badge-list">
        <div className="card">
          <img className='badge-img' src= {Bronze} alt='Bronze'/>
          <div className="badge-title bronze ">
            Bronze Badge
          </div>
        </div>

        <div className="card">
          <img className='badge-img' src= {Gold} alt='Gold'/>
          <div className="badge-title gold ">
            Gold Badge
          </div>
        </div>

        <div className="card">
          <img className='badge-img' src= {Silver} alt='Silver'/>
          <div className="badge-title silver ">
            Silver Badge
          </div>
        </div>
      </div>

      <div className="level-section">
        <div className="level-title">
          How Can I get these Badges?
        </div>

        <div className="badge-levels">
          <div className="gold-badge-level">
            <h3>Gold Badge</h3>
            <h3>At least 70</h3>
          </div>
          <div className="silver-badge-level">
            <h3>Silver Badge</h3>
            <h3>At least 30</h3>
          </div>
          <div className="bronze-badge-level">
            <h3>Bronze Badge</h3>
            <h3>At least 10</h3>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Badges;
