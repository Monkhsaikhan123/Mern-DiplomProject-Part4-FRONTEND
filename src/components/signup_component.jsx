import React,{ Component, useState} from 'react'

export default function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Usertype, setUsertype] = useState('');
    const [image, setImage] = useState('');
    const [secretKey, setsecretKey] = useState('')


    const handleSubmit = (e) =>{
        if(Usertype==='Admin' && secretKey!=="Munkh"){
            e.preventDefault();
            alert("Invalid admin")
        }else{
            e.preventDefault();

            console.log(fname,lname, email,password, image);
            fetch('http://localhost:3000/register',{
                method:'POST',
                crossDomain:true,
                headers:{
                    "Content-type":"application/json",
                    Accept:"appilcation/json",
                    "Access-Control-Allow-Origin":"*",
                },
                body:JSON.stringify({
                    fname,
                    email,
                    lname,
                    password,
                    Usertype,
                    image
                }),
            })
                .then((res)=> res.json())
                .then((data)=> {
                    console.log(data, "userSign")
                    if(data.status === 'ok'){
                        alert("registeration success")
                        window.location.href='./sign-in'
                    }else{
                        alert("something went wrong")
                    }
                })
        }
      
    };
    return(
        <form onSubmit={handleSubmit}>
             <h3>Sign Up</h3>
            <div>
                Register as
                <input
                    type='radio'
                    name="UserType"
                    value='User'
                    required
                    onChange = {(e)=>setUsertype(e.target.value)}
                /> User
                <input
                    type='radio'
                    name='UserType'
                    value='Admin'
                    required
                    onChange={(e)=> setUsertype(e.target.value)}
                />  Admin

            </div>
            {Usertype==="Admin"?
                 <div className='mb-3'>
                 <label>Secret Key</label>
                 <input
                     type='text'
                     className='form-control'
                     placeholder='Secret Key'
                     required
                     onChange={(e)=> setsecretKey(e.target.value)}
                 />
             </div>
             :null
        }
             <div className='mb-3'>
                 <label>Firstname</label>
                 <input
                     type='text'
                     className='form-control'
                     placeholder='First name'
                     required
                     onChange={(e)=> setFname(e.target.value)}
                 />
             </div>
             <div className='mb-3'>
                 <label>Lastname</label>
                 <input
                     type='text'
                     className='form-control'
                     placeholder='Last name'
                     required
                     onChange={(e)=> setLname(e.target.value)}
                 />
             </div>
             <div className='mb-3'>
                 <label>Email</label>
                 <input
                     type='email'
                     className='form-control'
                     placeholder='First name'
                     required
                     onChange={(e)=> setEmail(e.target.value)}
                 />
             </div>
             <div className='mb-3'>
                 <label>Password</label>
                 <input
                     type='password'
                     className='form-control'
                     placeholder='Enter password'
                     required
                     onChange={(e)=> setPassword(e.target.value)}
                 />
             </div>
             <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>
                    Sign Up
                </button>
                <p className='forgot-password text-right'>
                    Already registered<a href='/sign-in'>Sign in?</a>
                </p>
            </div>

        </form>
     )
}

    