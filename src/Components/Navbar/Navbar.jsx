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
    <a className="btn btn-ghost text-2xl text-green-500">Gadgets <span className="text-orange-500">Show</span></a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={`${!user? 'https://i.ibb.co/Zz3fpry/user.jpg' : user?.photoURL ? user?.photoURL : 'https://i.ibb.co/JvKnHqt/user-login.png'}`} />
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