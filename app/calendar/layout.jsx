import Navbar from "@/components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
