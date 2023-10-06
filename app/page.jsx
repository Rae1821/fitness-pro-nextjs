import Link from 'next/link';

const Home = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-r from-[#ece9e6] to-[#ffffff] flex flex-col items-center">
      <div className=" w-full md:w-2/3 mx-auto flex justify-center mb-4">
          <h1 className="text-3xl md:text-4xl text-center text-black pt-20 font-bold">{`"`}The real workout starts when you want to stop.{`"`}
          <span className="block text-xs pt-2 text-gray-600">-Ronnie Coleman</span>
          </h1>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="">
          <Link className="bg-emerald-600 py-2.5 px-3.5 rounded-full text-xl border-2 border-emerald-600" href="/">Sign Up</Link>
        </div>
        <div>
          <Link className="border-2 border-emerald-600 py-2.5 px-3.5 rounded-full text-xl" href="/">Login</Link>
        </div>
      </div>

    </section>
  )
}

export default Home;
