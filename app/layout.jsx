import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider'

export const metadata = {
    title: "Fitness Pro",
    description: "Track your workouts and see your growth"
}

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html lang="en" data-theme="mytheme">
        <body suppressHydrationWarning={true}>
              <div className="main">
                <main>
                  <Navbar />
                  {children}
                </main>
              </div>
        </body>
      </html>
    </Provider>
  )
}

export default RootLayout
