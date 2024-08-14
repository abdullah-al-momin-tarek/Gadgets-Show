import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="poppins">
            <Outlet/>
        </div>
    );
};

export default Root;