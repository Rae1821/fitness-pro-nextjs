'use client'

import { useState, useEffect } from 'react';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';


const Home = () => {

  const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
            setUpProviders();
    }, [])

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/assets/images/main-bg.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome Back</h1>
            <p className="mb-5">"The only bad workout is the one you didn't do"
            <br />
              <span className="text-xs">- someone awesome</span></p>

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
