import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <div
      className='relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url(/assets/images/bg-4.jpg)" }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 text-center text-white'>
        <div className='max-w-md'>
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default Home;
