'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Navbar = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    //const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
            setUpProviders();
    }, [])


  return (

    <div className="navbar bg-base-100">

        {session?.user ? (
            <>
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/profile">My Profile</Link></li>
                <li><Link href="/create-workout">Create Workout</Link></li>
                <li><Link href="/build-workout">Find Exercises</Link></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href="/" className="btn btn-ghost normal-case text-xl">Fitness Pro</Link>
        </div>
        <div className="navbar-end">
            <button
                type="button"
                onClick={signOut}
                className="btn btn-accent btn-sm btn-outline"
            >
                Sign Out
            </button>
            <Link href="/profile">
                <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    alt="profile"
                    className="rounded-full ml-4"
                />
            </Link>
        </div>
        </>

        ) : (

        <>
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Fitness Pro</a>
            </div>
            {providers &&
                Object.values(providers).map((provider) => (
                    <div className="navbar-end">
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="btn btn-accent btn-sm"
                        >
                            Sign In
                        </button>
                    </div>
            ))}
        </>
    )}
    </div>
)};

export default Navbar;
