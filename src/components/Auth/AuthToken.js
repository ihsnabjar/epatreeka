import React from 'react'
import {useStateValue} from '../../StateProvider';

// Logout User
export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}


// setup config/headers
export const tokenConfig = (token) => {
   const config = {
       headers: {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`,
       }
   }
    // if token , add to header
//    if(token){
//        config.headers['x-auth-token'] = token;
//    }


   return config;
}


// CLEAR ERRORS