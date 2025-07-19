import Navbar from "@/components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div data-theme='night'>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
