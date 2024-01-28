import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom';

const View = () => {
    const [users, setUsers] = useState([]);

  useEffect(()=>{
axios.get('http://localhost:5000')
.then(result=> {
    setUsers(result.data) 
     console.log(result.data);
})
.catch(err=> console.log(err))
  }, [])

  const deleteuser=(id)=>{
axios.delete('http://localhost:5000/deleteUser/'+ id,)
.then(result=> {
    console.log(`User ${result.data.username} Record Deleted`)
    window.location.pathname='/View';
})
.catch(err => console.log(err))
  }
  
    return (
    <>
<Container>
<h1>View your records</h1>

<Link to="/" className='my-5 btn btn-warning'>Add More</Link>

{
    users.map((user, index) => (
        <div className='d-flex justify-content-between shadow my-3 align-items-center p-2 flex-md-nowrap flex-wrap' key={index}>
            <p style={{ margin: "0px" }}>{user.username}</p>
            <p style={{ margin: "0px" }}>{user.password}</p>
            <p style={{ margin: "0px" }}>{user.details}</p>

            <div className='d-flex gap-2'>
                <Link to={`/Edit/${user._id}`} className='btn btn-primary'>Edit</Link>
                <button onClick={(e)=> deleteuser(user._id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    ))
}

<p className=' p-2 mt-5' style={{color:"green"}}>There are {users.length} records</p> 


</Container>

    </>
  )
}

export default View
