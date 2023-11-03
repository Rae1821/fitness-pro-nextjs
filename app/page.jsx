import BarChart from "@components/BarChart";
import Link from 'next/link';

const Home = () => {

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/assets/images/main-bg.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome Back</h1>
      <p className="mb-5">"The only bad workout is the one you didn't do"
      <br />
        <span className="text-xs">- someone awesome</span></p>
      <Link href="/create-workout" className="btn btn-accent">Create Workout</Link>

    </div>
  </div>
</div>
  )
}

export default Home;
