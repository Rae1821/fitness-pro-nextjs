'use client'

import { useState, useEffect } from 'react';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';
import { quoteData } from '@utils/quoteData'
import { unstable_noStore as noStore } from 'next/cache';



const Home = () => {

  noStore();

  const { data: session } = useSession();


    const [providers, setProviders] = useState(null);

    const [randomQuote, setRandomQuote] = useState({
        id: 0,
        quote: '',
        author: '',
    })

    //get provider
    useEffect(() => {
        const setUpProviders = async () => {
          const response = await getProviders();
          setProviders(response);
      }
          setUpProviders();
    }, [])

    //get quote
    useEffect(() => {
      const getRandomQuote = () => {
        let randomIndex = Math.floor(Math.random() * quoteData.length);
        const quoteIndex = quoteData[randomIndex]
        setRandomQuote(quoteIndex)
      }

        getRandomQuote();

    }, [])




  return (
    <div className="hero min-h-screen" data-theme='dracula' style={{backgroundImage: 'url(/assets/images/bg-4.jpg)'}}>
      <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">

          {!session?.user ?
            <div className="place-items-start">
              <h1 className="mb-5 text-5xl lg:text-6xl font-bold">Welcome Back</h1>

              {providers &&
                  Object.values(providers).map((provider) => (
                      <button
                          type="button"
                          key={provider.name}
                          onClick={() => signIn(provider.id)}
                          className="btn btn-accent btn-sm"
                      >
                          Sign In
                      </button>
              ))}
            </div>
                : <>
                  <div className="mb-8">
                    <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4 text-gray-100">Let&apos;s work out</h1>
                    <p className=" text-gray-200 max-w-xs text-sm lg:max-w-lg lg:text-base">"{randomQuote.quote}"
                    <br />
                    <span className="text-xs">- {randomQuote.author}</span></p>
                  </div>

                  <div className="flex justify-between max-w-xs gap-2 mx-auto">
                    <Link href="/create-workout" className="btn btn-sm btn-accent">Record Workout</Link>
                    <Link href="/dashboard" className="btn btn-sm btn-accent btn-outline">My Dashboard</Link>
                  </div>
                </> }
        </div>
    </div>
</div>
  )
}

export default Home;
