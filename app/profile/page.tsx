'use client'
import React, {useEffect, useState} from 'react'
import { UserAuth } from '../context/Authcontext'

const page = () => {

  const {user} = UserAuth()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () =>{
        await new Promise((resolve) => setTimeout(resolve, 350));
        setLoading(false);
    }
    checkAuthentication();
}, [user]);

  
  return (
    <div className=' p-4'>
      {loading ? (
        <p>Loading...</p>
      ): (
        user ? (
        <p> Welcome, {user.displayName} - you are logged in to the profile page -- a protected route</p>
      ) : (
        null
      ))}
    </div>
  )
}

export default page