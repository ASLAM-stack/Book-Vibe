import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 

const BookDetails = () => {
    const book = useLoaderData();
    const {bookId} = useParams();
    const [singelBook,setsingelBook] = useState([]);
    useEffect(() =>{
      const newBook = book.find(b => b.bookId == bookId);
      setsingelBook(newBook);
    },[bookId,book])
    const {category,tags,rating,image,author,bookName,totalPages,publisher} = singelBook;
    return (
        <div>
             <div>
                <div>
                  <img src={image} alt={bookName} />
                </div>
                <div>

                </div>
             </div>
        </div>
    );
};

export default BookDetails;