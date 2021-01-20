import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import paaila from '../../assets/paaila.png';
import {useStateValue} from '../../StateProvider';
import * as api from '../../api/index';
import axios from 'axios';



function Login() {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[msg, setMsg] = useState([]);

   const signIn = e => {
    e.preventDefault();
                   // headers
            const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        // Request Body 
        const body = JSON.stringify({ email, password});

        axios.post("https://paailanews.herokuapp.com/api/login", body, config)
        .then(res => {
            console.log(res)
            dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
            })
            history.push('/dashboard')
         })
        .catch(err => {
            setMsg(err.response.data.message)
            dispatch({
                type: 'LOGIN_FAIL'
            })
            
        })
        
      
        
    }

    return (
        <div className='login'>
                <img
                    className="login__logo"
                    src={paaila}
                    alt='paaila' 
                />
            <div className='login__container'>

                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={ (e)=> setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>

                </form>
                <pre className="error__msg">{msg}</pre>

            </div>
        </div>
    )
}

export default Login