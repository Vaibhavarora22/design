import React from 'react'
import Middle from './Middle'
import '../styles/home.css';
import Sidebar from './Sidebar';
import Last from './Last';

const Home = () => {
  return (
    <>
        <div className='cont'>
            <div>
                <Sidebar />
            </div>
            <div className='hm'>
                <Middle />
            </div>
            <div className='line'>
        
            </div>
            <div>
                <Last />
            </div>
            
            
        </div>
        {/* <div className="container">
            <div className="row">
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-6 hm">
                    <Middle />
                </div>
                <div className="col-md-3">
                    <h1>hello</h1>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Home