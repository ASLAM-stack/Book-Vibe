import "../MainLayOut/main.css";
import Book from "./Book";

const Books = ({books}) => {
    return (
        <div className="mt-12 mb-12">
            <h1 className="font-bold text-5xl text-[#131313] text-center playfair">Book</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-5 mt-12 p-2 md:p-0">
                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;