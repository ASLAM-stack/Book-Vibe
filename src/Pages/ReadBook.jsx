import ListCard from "../Component/ListCard";

 

const ReadBook = () => {
    const books = JSON.parse(localStorage.getItem('read'));
    console.log(books)
    return (
        <div>
            <div>
                {
                    books.map(book => <ListCard book={book}></ListCard>)
                }
            </div>
        </div>
    );
};

export default ReadBook;