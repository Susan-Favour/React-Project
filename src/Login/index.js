import './index.css'

import { useState } from 'react';

import { login } from './utils';

const Login=()=>{
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
const handleSubmit=async(event)=>{
    event.preventDefault();
    const results=await login({username,password});
    console.log({results});
}
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter userName" type="text" onChange={(event)=>setUserName(event.target.value)}/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;