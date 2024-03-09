import React, {Component, useState, useEffect, Route} from 'react';
import { useLocation } from 'react-router-dom'


const updateUser = () => {
    const location = useLocation();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=>{
        console.log(location)
        setFname(location.state.fname)
        setLname(location.state.lname)
        setEmail(location.state.email)
    },[])

    const updateData =()=>{
        console.log(fname, lname)
        fetch('http://localhost:3000/updateUser',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type" : 'application/json',
                Accept: 'appilcation/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body:JSON.stringify({
                id:location.state._id,
                fname:fname,
                lname:lname,
                email:email,
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            window.location.href='/userhome'
        })
    }


  return (
    <div>
        First Name<br/>

        <input placeholder='First Name' className='form-control' defaultValue={fname} 
        onChange={(e)=> setFname(e.target.value)}/><br/>

        Last Name<br/>

        <input placeholder='Last Name' className='form-control'  defaultValue={lname}
        onChange={(e)=> setLname(e.target.value)} /><br/>

        Email<br/>

        <input placeholder='Email' className='form-control' disabled  defaultValue={email}
        onChange={(e)=> setEmail(e.target.value)}/><br/>
        
        <button onClick={updateData}> Update Details</button>
    </div>
  )
}

export default updateUser