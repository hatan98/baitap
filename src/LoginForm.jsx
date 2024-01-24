import React, { useState } from 'react';

function LoginForm() {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const login = (e)=>{
        e.preventDefault();
        if(email)
        console.log({
            email,
            pass
        })
    }

  return (
    <div>
        <h1>bài tập 3</h1>
      <form >
        <input type="text" placeholder='email' onChange={e=>setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder='password' onChange={e=>setPass(e.target.value)} value={pass}/>
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
