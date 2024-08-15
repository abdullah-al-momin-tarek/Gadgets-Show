import { useContext } from "react";
import {AuthContext} from "../../AuthProvider/AuthProvider"
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      toast.success("Logout Successfull")
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }
  
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Gadgets Show</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><button onClick={handleLogOut}>Log out</button></li>
      </ul>
    </div>
  </div>
  <Toaster/>
</div>
    );
};

export default Navbar;