import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import Books from "../Component/Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="mt-10">
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;