import { ClerkProvider } from '@clerk/nextjs';

const Layout = ({ children }) => {
    return (

      <div className="flex">
        <ClerkProvider>
          <div className=" flex-1 min-h-screen">
                {children}
          </div>
        </ClerkProvider>
      </div>
    )
  }

  export default Layout