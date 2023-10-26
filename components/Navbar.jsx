'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import SwapToggle from './SwapToggle';

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
    <nav>
        <div className="navbar bg-base-100">

        {session?.user ? (
            <>
            <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <Link
                        href="/profile"
                        >
                        My Profile
                    </Link>
                </li>
                <li>
                    <Link
                        href="/create-workout"
                    >
                        Create Workout
                    </Link>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Fitness Pro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link
                        href="/profile"
                        >
                        My Profile
                    </Link>
                </li>
                <li tabIndex={0}>
                    <details>
                    <summary>
                        <Link
                            href="/create-workout"
                        >
                            Create Workout
                        </Link>
                    </summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button
                type="button"
                onClick={signOut}
                className="btn"
            >
                Sign Out
            </button>
            <Link href="/profile">
                <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    alt="profile"
                    className="rounded-full"
                />
            </Link>
        </div>
        </>
        ) : (
            <>
            {providers &&
                Object.values(providers).map((provider) => (
                    <>
                    <div className="navbar-start">
                        <a className="btn btn-ghost normal-case text-xl">Fitness Pro</a>
                    </div>
                    <div className="navbar-end">
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="btn"
                        >
                            Sign In
                        </button>
                    </div>
                </>
            ))}
            </>
        )}

        </div>
    </nav>


    /* <nav className="flex justify-between w-full my-4 p-2 bg-white dark:bg-gray-900">
        <div className="flex">
            <SwapToggle />
            <Link href="/" className="flex gap-2 flex-center font-bold pl-4 text-lg">
                Fitness Pro
            </Link>
        </div> */

        /* Desktop navigation */
        // <div className="sm:flex hidden">
        //     {session?.user ? (
        //         <div className="flex gap-3 md:gap-5 items-center">
        //             <Link
        //                 href="/profile"
        //                 className="text-base font-inter text-gray-700 hover:text-gray-500 font-medium"
        //                 onClick={() => setToggleDropdown(false)}>
        //                     My Profile
        //             </Link>
        //             <Link
        //                 className="text-base font-inter text-gray-700 hover:text-gray-500 font-medium"
        //                 href="/create-workout">
        //                     Create Workout
        //             </Link>
        //             <button
        //                 type="button"
        //                 onClick={signOut}
        //                 className="btn btn-success btn-outline btn-sm"
        //                 >
        //                 Sign Out
        //             </button>

        //             <Link href="/profile">
        //                 <Image
        //                     src={session?.user.image}
        //                     width={37}
        //                     height={37}
        //                     className="rounded-full"
        //                     alt="profile"
        //                 />
        //             </Link>
        //         </div>
        //     ) : (
        //         <>
        //             {providers &&
        //                 Object.values(providers).map((provider) => (
        //                     <button
        //                         type="button"
        //                         key={provider.name}
        //                         onClick={() => signIn(provider.id)}
        //                         className="btn btn-success btn-sm"
        //                     >
        //                         Sign In
        //                     </button>
        //                 ))
        //             }
        //         </>
        //         )}
        // </div>

        /* Mobile Navigation */
        // <div className="sm:hidden flex relative z-20">
        //     {session?.user ? (
        //         <div className="flex">
        //             <Image
        //                 src={session?.user.image}
        //                 width={37}
        //                 height={37}
        //                 className="rounded-full"
        //                 alt="profile"
        //                 onClick={() => setToggleDropdown((prev) => !prev)}
        //             />

        //             {toggleDropdown && (
        //                 <div className="absolute right-0 top-full mt-3 w-full  p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
        //                     <Link
        //                         href="/profile"
        //                         className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
        //                         onClick={() => setToggleDropdown(false)}>
        //                             My Profile
        //                         </Link>
        //                         <Link
        //                         href="/create-workout"
        //                         className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
        //                         onClick={() => setToggleDropdown(false)}>
        //                             Create workout
        //                         </Link>
        //                         <button
        //                         type="button"
        //                         className="btn btn-success btn-wide"
        //                         onClick={() => {
        //                             setToggleDropdown(false);
        //                             signOut();
        //                         }}>
        //                             Sign Out
        //                         </button>

        //                 </div>
        //             ) }
        //         </div>

        //     ) : (
        //         <>
        //             {providers &&
        //                 Object.values(providers).map((provider) => (
        //                     <button
        //                         type="button"
        //                         key={provider.name}
        //                         onClick={() => signIn(provider.id)}
        //                         className="btn btn-success"
                                // className="mt-5 w-full btn btn-success rounded-full border border-emerald-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-iner flex items-center justify-center"
    //                         >
    //                             Sign In
    //                         </button>
    //                     ))
    //                 }
    //             </>
    //         )}
    //     </div>
    // </nav>


//   );
)};

export default Navbar;
