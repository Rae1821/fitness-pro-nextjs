import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const RootLayout = ({ children }) => {
  return (
    <div>
      <main className={montserrat.className}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
