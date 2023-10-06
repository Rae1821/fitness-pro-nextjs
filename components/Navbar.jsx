'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

            setProviders();
    }, [])

  return (
    <nav className="flex justify-between w-full my-4">
        <Link href="/" className="flex gap-2 flex-center font-bold pl-4 text-lg">
            Fitness Pro
        </Link>

        {/* Desktop navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link
                    className="bg-emerald-600 px-4 py-2 rounded-full text-white"
                     href="/create-workout">
                        Create Workout
                    </Link>
                    <button
                        type="button"
                        onClick={signOut}
                        className="border border-emerald-600 px-4 py-2 rounded-full"
                        >
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image />
                    </Link>
                </div>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="bg-black"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>)}
        </div>
    </nav>
  )
}

export default Navbar
