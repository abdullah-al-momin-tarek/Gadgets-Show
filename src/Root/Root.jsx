import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="poppins container mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;