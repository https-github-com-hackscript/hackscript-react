import React from 'react'
import './Login.css'
function Login() {
  return (
   <>
   <div className="main">
  <div className="lbox">
    <img src="https://i.pinimg.com/originals/84/29/cd/8429cdee1adae44d354d03d24a1c285d.gif"/>
    <div className="square">
      <h2> Start your <n>journey</n>  with us.</h2>
      <p>Explore the communities of your interest and be a part of them.</p>
    </div>
  </div>
  <div className="box"> 
    <h3>
      Email
    </h3>
    <input type="email" placeholder="    Enter Email" />
    <h3>
      Password
    </h3>
    <input type="password" placeholder="    Enter Password" /><br /><br />
    <button>Login</button>
  </div>
</div>

   </>
  )
}

export default Login