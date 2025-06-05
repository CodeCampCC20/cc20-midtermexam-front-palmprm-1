import{ NavLink}from "react-router";

function Navbar(){
    return (
        <nav className="h-13 flex items-center gap-6">
            <h1>Welcome</h1>
            <NavLink className={"cursor-pointer hover:underline"}to={"/"}
            >Email </NavLink>
            <NavLink className={"cursor-pointer hover:underline"}to={"/create"}
            >password </NavLink>
            <NavLink className={"cursor-pointer hover:underline"}to={"/login"}
            >Login</NavLink>


           
        </nav>

    
    
    
    );
}

export default Navbar;