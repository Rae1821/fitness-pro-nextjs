"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  //   const router = useRouter();
  const { data: session } = useSession();
  const pathName = usePathname();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <div className='navbar bg-base-100 shadow-md'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-circle btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/dashboard'>My Dashboard</Link>
            </li>
            <li>
              <Link href='/create-workout'>Create Workout</Link>
            </li>
            <li>
              <Link href='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link href='/plan-workout'>Plan Workout</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost text-xl normal-case'>
          Fitness Pro
        </Link>
      </div>

      {session?.user ? (
        <div className='navbar-end'>
          <button
            type='button'
            onClick={signOut}
            className='btn btn-ghost btn-outline btn-xs'
          >
            Sign Out
          </button>
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            alt='profile'
            className='ml-4 rounded-full'
          />
        </div>
      ) : !session?.user && pathName === "/dashboard" ? (
        <div className='navbar-end'>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='btn btn-accent btn-sm'
              >
                Sign In
              </button>
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
