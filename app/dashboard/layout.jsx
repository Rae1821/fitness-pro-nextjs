import Sidebar from "@components/dashboard/sidebar/Sidebar"

const Layout = ({ children }) => {
    return (
      <div className="flex">
          <div className=" flex-1 p-5 min-h-screen">
              <Sidebar />
          </div>
          <div className="flex-grow p-5">

              {children}

          </div>
      </div>
    )
  }

  export default Layout