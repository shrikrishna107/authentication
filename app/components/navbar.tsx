import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/Authcontext'

const navbar = () => {
    const { user, googleSignIn, logout } = UserAuth();
    const [loading, setLoading] = useState(true)

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    };

    const handleSignOut = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 350));
            setLoading(false);
        }
        checkAuthentication();
    }, [user]);

    return (
        <div className=' h-20 flex items-center w-full justify-between p-2 border-b-2'>
            <div className=' flex'>
                <div className=' p-2 cursor-pointer'>
                    <Link href={'/'}>Home</Link>
                </div>
                <div className=' p-2 cursor-pointer'>
                    <Link href={'./about'}>About</Link>
                </div>

                {!user ? null : (
                    <div className=' p-2 cursor-pointer'>
                        <Link href={'./profile'}>Profile</Link>
                    </div>
                )}
            </div>

            {loading ? null : !user ? (
                <div className=' flex'>
                    <div onClick={handleSignIn} className=' p-2 cursor-pointer'>
                        Log In
                    </div>
                    <div onClick={handleSignIn} className=' p-2 cursor-pointer'>
                        Sign Up
                    </div>

                </div>
            ) : (
                <div className=' flex'>
                    <div className=' p-2 cursor-pointer'>
                        Welcome, {user.displayName}
                    </div>
                    <div onClick={handleSignOut} className=' p-2 cursor-pointer'>
                        Log Out
                    </div>

                </div>
            )}

        </div>
    )
}

export default navbar