import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const [username, setUsername]= useState();
    const [password, setPassword]= useState();
    const [details, setDetails]= useState();
const navigate = useNavigate();

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/createUser", {username, password, details})
        .then(result => {
          console.log(result.data)
          navigate('/View')
        })
        .catch(err=> console.log(err))
       
    }

  return (
    <div>
    <Container>
    <h1>Add your Keychain</h1>
<form className='mt-5 pt-5' onSubmit={Submit}>

<input type='text' className='form-control my-3' placeholder='Enter Your Username'
onChange={(e)=>setUsername(e.target.value)}
/>

<input type='text' className='form-control my-3' placeholder='Enter Your Password'
onChange={(e)=>setPassword(e.target.value)}
/>

<input type='text' className='form-control my-3' placeholder='Enter Your Details'
onChange={(e)=>setDetails(e.target.value)}
/>

<div className='d-flex gap-3 mt-5'>
<input type='submit' className='btn btn-warning ' value="Store Data" style={{color:"white", fontWeight:"500"}}/>
<Link to="/View" className='btn btn-danger '>View All Records</Link>
</div>
    

</form>

    </Container>
    </div>
  )
}

export default Home
