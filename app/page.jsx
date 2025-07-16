import Welcome from "@components/Welcome";

const Home = () => {
  return (
    <div
      className='hero min-h-screen'
      data-theme='dracula'
      style={{ backgroundImage: "url(/assets/images/bg-4.jpg)" }}
    >
      <div className='hero-overlay'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default Home;
