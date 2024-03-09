
import React,{ Component} from 'react'

export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const{email} = this.state;
        console.log(email);
        fetch('http://localhost:3000/forgot-password',{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"appilcation/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
            }),
        })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data, "userRegister")
                alert(data.status);
            })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='reset' style={{backgroundSize:'cover', backgroundImage:'url("https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                    <div className='reset-box'> 
                                    <h3>Forgot Password</h3>
                                
                                <div className='mb-3'>
                                    <label>Email address</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='Enter Email'

                                        onChange={(e)=> this.setState({email : e.target.value})}
                                    />
                                </div>

                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-primary'>
                                        Submit
                                    </button>
                                </div>
                                <p className='forgot-password text-right'>
                                    <a href='/sign-up'>Sign Up</a>
                                </p>
                    </div>
                </div>
                
            </form>
        )
    }
}

