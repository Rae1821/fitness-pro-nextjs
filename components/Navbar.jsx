"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

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
    <nav className='flex items-center justify-between border-b border-b-slate-900 bg-slate-950 px-4 py-2 shadow-md backdrop-blur'>
      <div className='flex'>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='sm' className='mr-2 md:hidden'>
              <Menu className='size-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-64'>
            <SheetTitle>Navigation Menu</SheetTitle>
            <nav className='mt-6 flex flex-col space-y-4'>
              <Link href='/dashboard' className='text-lg hover:text-teal-400'>
                My Dashboard
              </Link>
              <Link
                href='/create-workout'
                className='text-lg hover:text-teal-400'
              >
                Record Workout
              </Link>
              <Link href='/calendar' className='text-lg hover:text-teal-400'>
                Calendar
              </Link>
              <Link
                href='/plan-workout'
                className='text-lg hover:text-teal-400'
              >
                Plan Workout
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href='/'
          className='place-self-end text-xl font-bold text-teal-400'
        >
          Fitness Pro
        </Link>

        {/* Desktop Menu */}
        <div className='ml-8 hidden space-x-6 md:flex md:items-center'>
          <Link
            href='/dashboard'
            className='text-sm tracking-tight hover:text-teal-400'
          >
            Dashboard
          </Link>
          <Link
            href='/create-workout'
            className='text-sm tracking-tight hover:text-teal-400 '
          >
            Record Workout
          </Link>
          <Link
            href='/calendar'
            className='text-sm tracking-tight hover:text-teal-400'
          >
            Calendar
          </Link>
          <Link
            href='/plan-workout'
            className='text-sm tracking-tight hover:text-teal-400 '
          >
            Plan Workout
          </Link>
        </div>
      </div>

      {session?.user ? (
        <div className='flex items-center space-x-4'>
          <ModeToggle />
          <Button
            variant='outline'
            size='sm'
            onClick={signOut}
            className='border-white/10 bg-slate-900/40 hover:bg-slate-900/60'
          >
            Sign Out
          </Button>
          <Avatar>
            <AvatarImage src={session?.user.image} alt='profile' />
            <AvatarFallback>
              {session?.user.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : !session?.user && pathName === "/dashboard" ? (
        <div className='flex items-center'>
          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                size='sm'
                className='bg-cyan-600 hover:bg-cyan-700'
              >
                Sign In
              </Button>
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
