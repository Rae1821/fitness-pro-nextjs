"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    <nav className='flex items-center justify-between px-4 py-2'>
      <div className='flex items-center'>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='sm' className='mr-2 md:hidden'>
              <Menu className='size-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-64'>
            <nav className='mt-6 flex flex-col space-y-4'>
              <Link href='/dashboard' className='text-lg hover:text-cyan-600'>
                My Dashboard
              </Link>
              <Link
                href='/create-workout'
                className='text-lg hover:text-cyan-600'
              >
                Create Workout
              </Link>
              <Link href='/calendar' className='text-lg hover:text-cyan-600'>
                Calendar
              </Link>
              <Link
                href='/plan-workout'
                className='text-lg hover:text-cyan-600'
              >
                Plan Workout
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href='/' className='text-xl font-bold hover:text-cyan-600'>
          Fitness Pro
        </Link>

        {/* Desktop Menu */}
        <div className='ml-8 hidden space-x-6 md:flex md:items-center'>
          <Link
            href='/dashboard'
            className='text-sm font-semibold tracking-tight hover:text-cyan-600'
          >
            Dashboard
          </Link>
          <Link
            href='/create-workout'
            className='text-sm font-semibold tracking-tight hover:text-cyan-600'
          >
            Create Workout
          </Link>
          <Link
            href='/calendar'
            className='text-sm font-semibold tracking-tight hover:text-cyan-600'
          >
            Calendar
          </Link>
          <Link
            href='/plan-workout'
            className='text-sm font-semibold tracking-tight hover:text-cyan-600'
          >
            Plan Workout
          </Link>
        </div>
      </div>

      {session?.user ? (
        <div className='flex items-center space-x-4'>
          <ModeToggle />
          <Button variant='outline' size='sm' onClick={signOut}>
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
