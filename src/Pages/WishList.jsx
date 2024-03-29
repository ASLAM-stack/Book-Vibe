import ListCard from "../Component/ListCard";

 

const WishList = () => {
    const books = localStorage.getItem('wish');
    console.log(books)
    
    return (
        <div>
            <div>
                <h1>hi</h1>
                {
                    books.map(book => <ListCard book={book}></ListCard>)
                }
            </div>
        </div>
    );
};

export default WishList;