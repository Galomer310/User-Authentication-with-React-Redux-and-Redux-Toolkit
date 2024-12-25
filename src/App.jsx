import Login from "./components/Login"
import LogOut from "./components/Logout"
import React from "react"
import { useSelector } from "react-redux"


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
    <div>
    {
      isAuthenticated ? ( <div>
        <h1>Welcome {user?.user}</h1>
        <LogOut />
      </div>
      ) : (
        <Login />
      )}
    </div>
    </>
  )
}

export default App
