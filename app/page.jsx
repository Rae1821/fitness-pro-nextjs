'use client'

import { useState, useEffect } from 'react';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';
import { quoteData } from '@utils/quoteData'


const Home = () => {

  const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    const [randomQuote, setRandomQuote] = useState({
        id: 0,
        quote: '',
        author: '',
    })

    useEffect(() => {
        const setUpProviders = async () => {
          const response = await getProviders();
          setProviders(response);
      }
          setUpProviders();
    }, [])

    useEffect(() => {
      const getRandomQuote = () => {
        let randomIndex = Math.floor(Math.random() * quoteData.length);
        const quoteIndex = quoteData[randomIndex]
        setRandomQuote(quoteIndex)
      }

        getRandomQuote();

    }, [])




  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/assets/images/bg-4.jpg)'}}>
      <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Welcome Back</h1>
            <p className="mb-5 text-gray-300 max-w-sm">"{randomQuote.quote}"
            <br />
              <span className="text-xs">- {randomQuote.author}</span></p>

              {session?.user ? (
                <div>
                  <Link href="/create-workout" className="btn btn-accent">Record Workout</Link>
                </div>

                ) : (

                <div>
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
              )}
        </div>
    </div>
</div>
  )
}

export default Home;
