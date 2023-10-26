import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@/components/Provider';

export const metadata = {
    title: "Fitness Pro",
    description: "Track your workouts and see your growth"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="dark:bg-gray-900 dark:text-white">
        <Provider>
            <div className="main">
              <main>
                <Navbar />
                {children}
              </main>
            </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
