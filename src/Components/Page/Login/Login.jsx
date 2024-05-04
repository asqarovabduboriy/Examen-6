import React, { useState } from 'react'
import './Login.css'
import axios from '../../Api/Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import img from '../../../assets/Imgs/Logo1.png'

const Login = () => {

  
  const [username, setusername] = useState('mor_2314')
  const [password, setpassword] = useState('83r5^_')
  const [loading,setoading]=useState(false)

  let navigate = useNavigate();

  const handelogin = (e) => {
    setoading(true)
    e.preventDefault()

    let user = {
      username,
      password,
    }

    axios
      .post("/auth/login", user)
      .then(res => {
        console.log(res.data.token)
        toast.success('xush kelipsiz')
        localStorage.setItem("x-auth-token", res.data.token)
        navigate('/admin')

      })
      .catch(err => {
        console.log(err);
        toast.error('xato bor')
      })
      .finally(() => setoading(false))
  }
  return (
    <div className='container'>
      <form onSubmit={handelogin} className='login_form'>
        <div className='Logo_login'><img src={img} alt="" /></div>
        <p>Email Address*</p>
        <input required value={username} onChange={e => setusername(e.target.value)} type="text" placeholder='Enter Your Email' />
        <p>Password*</p>
        <input required value={password} onChange={e => setpassword(e.target.value)} type="password" placeholder='Enter Your password' />
        <div className='wrapper_chekbox'>
          <input type="checkbox" name="" id="" />
          <p>Remember Me</p>
          <div style={{ marginLeft: '40px' }}>
            <p>Forgot Password?</p>
          </div>
        </div>
        <div className='btn_wrapper'>
          <button disabled={loading} >{loading ? 'Kuting ' : 'Submit'}</button>
          <p>Signup?</p>
        </div>
      </form>
    </div>
  )
}

export default Login