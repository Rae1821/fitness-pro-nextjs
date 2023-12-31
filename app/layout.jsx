import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@/components/Provider';
//import SwapToggle from '@components/SwapToggle';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    title: "Fitness Pro",
    description: "Track your workouts and see your growth"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="mytheme">
      <body suppressHydrationWarning={true}>
        <Provider>
            <div className="main">
              <main>
                <Navbar />
                {children}
                {/* <SwapToggle /> */}
              </main>
            </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
