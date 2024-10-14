import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <>
             {/* Navbar */}
             <div className="px-16 pt-3 flex gap-3">
                <Link to="/" className={`px-3 py-2 rounded-md text-white ${pathname === "/" ? 'bg-blue-500' :  'bg-gray-700'}`}>Todo with Rtk</Link>
                <Link to="/todo-with-redux-toolkit" className={`px-3 py-2 rounded-md text-white ${pathname === "/todo-with-redux-toolkit" ? 'bg-blue-500' :  'bg-gray-700'}`}>Todo with Redux-Toolkit</Link>
             </div>
        </>
    );
};

export default Navbar;