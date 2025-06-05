import {Outlet} from "react-router";
import NavBar from "../Components/Navbar";

function MainLayout(){
    return( <div>
        <NavBar></NavBar>
        <Outlet />
    </div>
    );
}
 export default MainLayout;