'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

            setUpProviders();
    }, [])

  return (
    <nav className="flex justify-between w-full my-4">
        <Link href="/" className="flex gap-2 flex-center font-bold pl-4 text-lg">
            Fitness Pro
        </Link>

        {/* Desktop navigation */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5 items-center">
                    <Link
                        href="/profile"
                        className="text-base font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggleDropdown(false)}>
                            My Profile
                    </Link>
                    <Link
                        className="text-base font-inter text-gray-700 hover:text-gray-500 font-medium"
                        href="/create-workout">
                            Create Workout
                    </Link>
                    <button
                        type="button"
                        onClick={signOut}
                        className=" bg-emerald-600 rounded-full border border-emerald-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-iner flex items-center justify-center"
                        >
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
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
                                className="mt-5 w-full bg-emerald-600 rounded-full border border-emerald-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-iner flex items-center justify-center"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
                )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative z-20">
            {session?.user ? (
                <div className="flex">
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className="absolute right-0 top-full mt-3 w-full  p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
                            <Link
                                href="/profile"
                                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                                onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link
                                href="/create-workout"
                                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                                onClick={() => setToggleDropdown(false)}>
                                    Create workout
                                </Link>
                                <button
                                type="button"
                                className="mt-5 w-full bg-emerald-600 rounded-full border border-emerald-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-iner flex items-center justify-center"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}>
                                    Sign Out
                                </button>

                        </div>
                    ) }
                </div>

            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="mt-5 w-full bg-emerald-600 rounded-full border border-emerald-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-iner flex items-center justify-center"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>
    </nav>
  );
};

export default Navbar;
