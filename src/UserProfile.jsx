import React, { useState } from 'react';

function UserProfile({props}) {
    const [email,setEmail] = useState('visible')
    const clickEmail = ()=>{
        setEmail((item)=>(item==='visible'?'invisible':'visible'))
        console.log(email)
    }
  return (
    <div className='baitap'>
        <h1>bài tập 1</h1>
      <h2>Thông tin cá nhân</h2>
    <p>họ và tên : {props.fullname}</p>
    <p className={email}> email : {props.email} </p>
    <img src={require('./'+props.src+'.jpeg')} alt={props.fullname} />
    <button onClick={clickEmail}>ẩn / hiện email</button>
    </div>
  )
}

export default UserProfile
