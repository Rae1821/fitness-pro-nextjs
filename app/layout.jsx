import '@styles/globals.css';
import Navbar from '@components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
//import SwapToggle from '@components/SwapToggle';


export const metadata = {
    title: "Fitness Pro",
    description: "Track your workouts and see your growth"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="mytheme">
      <body suppressHydrationWarning={true}>
        <ClerkProvider>
            <div className="main">
              <main>
                {/* <Navbar /> */}
                {children}
                {/* <SwapToggle /> */}
              </main>
            </div>
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
