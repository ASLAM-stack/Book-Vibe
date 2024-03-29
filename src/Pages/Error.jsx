import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Hero from "../Component/Hero";
 
import wave from '../assets/wave.svg'
 

const Error = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="flex relative flex-col items-center justify-center min-h-[100vh]"> 
          <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />

        </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;