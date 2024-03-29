import ListCard from "../Component/ListCard";

 

const ReadBook = () => {
    const books = JSON.parse(localStorage.getItem('read'));
    console.log(books)
    return (
        <div className="mt-12 mb-12">
            <div className="flex flex-col gap-5 justify-center items-center">
                {
                    books.map(book => <ListCard book={book}></ListCard>)
                }
            </div>
        </div>
    );
};

export default ReadBook;