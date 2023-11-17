
const Layout = ({ children }) => {
    return (
      <div className="flex">
          <div className=" flex-1 p-5 min-h-screen">
                {children}
          </div>
      </div>
    )
  }

  export default Layout