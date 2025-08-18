import "@/styles/globals.css";
import Provider from "@/components/Provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Fitness Pro",
  description: "Track your workouts and see your growth",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html
        lang='en'
        suppressHydrationWarning={true}
        className={montserrat.className}
      >
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
