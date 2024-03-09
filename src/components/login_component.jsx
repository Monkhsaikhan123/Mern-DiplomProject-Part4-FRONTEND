import React,{ Component} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const{email,password} = this.state;
        console.log(email,password);
        fetch('http://localhost:3000/login-user',{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"appilcation/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password
            }),
        })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data, "userRegister")
                if(data.status==='ok'){
                    alert('login successful');
                    window.localStorage.setItem('token', data.data);
                    window.localStorage.setItem('loggedIn', true);

                    window.location.href='./userDetails'
                }
            })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <div className='login'>
                    <div className='login-box'>
                            <h3>Sign in</h3>

                            <div className='mb-3'>
                                
                                <label>Email address</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Enter email'
                                    
                                    onChange={(e)=> this.setState({email: e.target.value})}
                                />
                                <FaRegUserCircle />
                            </div>

                            <div className='mb-3'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter password'

                                    onChange={(e)=> this.setState({password: e.target.value})}
                                />
                                <FaLock style={{width:15, height:15, gap:10}}/>
                            </div>


                            <h1 className='text-red'>Error Message</h1>

                            <div className='mb-3'>
                                <div className='custom-control custom-checkbox'>
                                    <input
                                        type='checkbox'
                                        className='custom-control-input'
                                        id='customCheck1'
                                    />
                                    <label className='custom-control-label' htmlFor='customCheck1'>
                                        Remember Me 
                                    </label>
                                </div>
                            </div>

                            <div className='d-grid'>
                                <button type='submit' className='btn btn-primary'>
                                    Submit
                                </button>
                            </div>
                            <p className='forgot-password text-right'>
                                Don't have account?
                                <a href='/sign-up'>Sign up</a>
                            </p>
                            <p className='forgot-password text-right'>
                                <a href='/reset'>Forgot password</a>
                            </p>
                    </div>
                   
                </div>
            </form>
        )
    }
}