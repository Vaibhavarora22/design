import React from 'react'
import '../styles/side.css';

const Sidebar = () => {
  return (
    <div className='side-box'>
        <div>
            <h1>Catalix</h1>
        </div>
        <div>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action active">
                    Home
                </button>
                <button type="button" className="list-group-item list-group-item-action">Activities</button>
                <button type="button" className="list-group-item list-group-item-action">Analytics</button>
                <button type="button" className="list-group-item list-group-item-action">Transformation</button>
                <button type="button" className="list-group-item list-group-item-action">Library</button>
            </div>
           
        </div>

    </div>
  )
}

export default Sidebar