import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const RootLayout = ({ children }) => {
  return (
    <div>
      <main
        className={`relative min-h-dvh bg-slate-950 text-slate-200 ${montserrat.className}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
