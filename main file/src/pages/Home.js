import NavBar from "../features/navBar/NavBar";
import { Outlet } from "react-router-dom";

function Home() {
    return ( <div>
        <NavBar>
            <Outlet/>
        </NavBar>
    </div> );
}

export default Home;