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
          <img className='badge-img' src= {Bronze}/>
          <div className="badge-title bronze ">
            Bronze Badge
          </div>
        </div>

        <div className="card">
          <img className='badge-img' src= {Gold}/>
          <div className="badge-title gold ">
          Gold Badge
          </div>
        </div>

        <div className="card">
          <img className='badge-img' src= {Silver}/>
          <div className="badge-title silver ">
          Silver Badge
          </div>
        </div>
      </div>


      <div className="table-section">
      <div className="table-title">
        How Can I get these Badges?
      </div>
      <table className='badge-table'>
        <caption className='table-caption'>Level of Badge</caption>
        <tr className='hint-area'>
          <th className="hint"></th>
          <th className="hint">A</th>
          <th className="hint">B</th>
        </tr>

        <tr>
          <th className="hint">1</th>
          <th className="bold-title">Badge Level</th>
          <th className="bold-title">Earn EZ points at least</th>
        </tr>

        <tr>
          <td className="hint">2</td>
          <td className="normal-title">Gold Badge</td>
          <td className="normal-title">70</td>
        </tr>

        <tr>
          <td className="hint">3</td>
          <td className="normal-title">Silver Badge</td>
          <td className="normal-title">30</td>
        </tr>

        <tr>
          <td className="hint">4</td>
          <td className="normal-title">Bronze Badge</td>
          <td className="normal-title">10</td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Badges
