"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { quoteData } from "@/utils/quoteData";
import { signIn, useSession, getProviders } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  const [randomQuote, setRandomQuote] = useState({
    id: 0,
    quote: "",
    author: "",
  });

  // get provider
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  // get quote
  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quoteData.length);
      const quoteIndex = quoteData[randomIndex];
      setRandomQuote(quoteIndex);
    };

    getRandomQuote();
  }, []);

  return (
    <>
      {!session?.user ? (
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='mb-5 text-5xl font-bold lg:text-6xl'>Welcome Back</h1>

          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                type='button'
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
        <>
          <div className='mb-8'>
            <h1 className='mb-4 font-display text-5xl font-bold text-gray-100 lg:text-6xl'>
              Let&apos;s work out
            </h1>
            <p className=' max-w-xs text-sm text-gray-200 lg:max-w-lg lg:text-base'>
              &quot;{randomQuote.quote}&quot;
              <br />
              <span className='text-xs'>- {randomQuote.author}</span>
            </p>
          </div>

          <div className='mx-auto flex max-w-xs justify-between gap-2'>
            <Button asChild size='sm' className='bg-cyan-600 hover:bg-cyan-700'>
              <Link href='/create-workout'>Record Workout</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='sm'
              className='text-primary'
            >
              <Link href='/dashboard'>My Dashboard</Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Welcome;
