
const Layout = ({ children }) => {
    return (
      <div className="flex">
          <div className=" flex-1 min-h-screen">
                {children}
          </div>
      </div>
    )
  }

  export default Layout