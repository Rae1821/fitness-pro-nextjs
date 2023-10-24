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
      <body suppressHydrationWarning={true}>
        <Provider>
            <div className="main">
              <main className="bg-[#f3f6f6]">
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
