import "@/styles/globals.css";
// import Navbar from '@/components/Navbar';
import Provider from "@/components/Provider";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Fitness Pro",
  description: "Track your workouts and see your growth",
};

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html lang='en' suppressHydrationWarning={true}>
        <body className='w-full'>
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
