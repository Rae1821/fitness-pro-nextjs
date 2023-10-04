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
      <body>
        <div className="main">
            <main className="app">
            <Navbar />
                {children}
            </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
