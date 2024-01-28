import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Edit = () => {
    const {id} = useParams()
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [details, setDetails]= useState('');
const navigate = useNavigate();


useEffect(()=>{
    axios.get('http://localhost:5000/getUser/'+id)
    .then(result=> {
        console.log(result.data)
        setUsername(result.data.username)
        setPassword(result.data.password)
        setDetails(result.data.details)
         
    })
    .catch(err=> console.log(err))
      }, [id])

      const Update =(e)=> {
        e.preventDefault();
        axios.put("http://localhost:5000/updateUser/"+id, {username, password, details})
        .then(result => {
         console.log(result.data)
    navigate('/View');
    })
        .catch(err=> console.log(err))
      }
  return (
    <div>
    <Container>
<form className='mt-5 pt-5' onSubmit={Update}>

<input type='text' className='form-control my-3' placeholder='Enter Your Username' value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input type='text' className='form-control my-3' placeholder='Enter Your Password' value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input type='text' className='form-control my-3' placeholder='Enter Your Details' value={details}
onChange={(e)=>setDetails(e.target.value)}
/>

<input type='submit' className='btn btn-dark mt-5' value="Update"/>
    

</form>

    </Container>
    </div>
  )
}

export default Edit
