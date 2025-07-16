import Navbar from "@components/Navbar";
import "@styles/globals.css";

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
