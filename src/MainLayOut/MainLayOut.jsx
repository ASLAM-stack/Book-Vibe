import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";
import './main.css'
import Footer from "../Component/Footer";
 

const MainLayOut = () => {
    return (
        <div className="flex flex-col">
            <Nav></Nav>
            <div className="container">
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;