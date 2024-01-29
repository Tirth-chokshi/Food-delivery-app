import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import Axios from "axios";
// import axios from 'axios';

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const onChangeValue=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({
            name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            geolocation:credentials.geolocation,
        }))
        const response = await fetch("http://localhost:5000/api/newuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name , email:credentials.email , password:credentials.password , geolocation:credentials.geolocation})
        })
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            alert("Enter valid credentials")
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name'value={credentials.name} onChange={onChangeValue}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChangeValue}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChangeValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChangeValue}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
