import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    
    return (
        
      <div className='text-center'>
        <h1 className='text-danger'>ERROR  <br />404 not found</h1>
        <Link to="/" className='btn btn-outline-danger'>BACK</Link>
      </div>
            
          

     
    
    )
}

export default Error