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
    const {category,tags,rating,image,author,bookName,totalPages,publisher,review,yearOfPublishing} = singelBook;
    const saveRead =  localStorage.getItem('read') || '[]';
    const saveWish =  localStorage.getItem('read') || '[]';
    console.log(saveRead,saveWish);
    // const [readlist,setaReadlist] = useState([saveRead])
    // const [Wishlist,setaWishlist] = useParams([saveWish])
  //   const saveList =JSON.parse(localStorage.getItem('read') || "[]");
  //   const saveWishList =JSON.parse(localStorage.getItem('wish') || "[]");
  //   const [readlist,setaReadlist] =useState([saveList]);
  //   const [wishlist,setaWishlist] =useState([saveWishList]);
  //   const handleRead = (book) =>{
  //     console.log(book);
  //       const isExist = readlist.find(readBook => readBook.bookId == book.bookId)
  //       if (!isExist) {
            
  //           setaReadlist([...readlist,...book])
  //           const stringJson = JSON.stringify(...readlist);
  //           localStorage.setItem('read',stringJson);
  //       }
	// }
  //   const handleWish = (wisk) =>{
  //       const isExistWish = wishlist.find(wishBook => wishBook.bookId == wisk.bookId)
  //       if (!isExistWish) {
            
  //         setaWishlist([...wishlist,...wisk])
  //           const stringJsonWish = JSON.stringify(...wishlist);
  //           localStorage.setItem('wish',stringJsonWish);
  //       }
	// }

 
    
    return (
        <div>
             <div className="flex mt-12 gap-8 mb-14 flex-wrap p-4 md:p-0">
                <div className="md:w-[45%] w-full bg-[#1313130D] p-4 rounded-2xl flex justify-center items-center max-h[600px]">
                  <img className="w-[90%] max-h-[600px]" src={image} alt={bookName} />
                </div>
                <div className="md:w-[45%] w-full">
                  <div className="space-y-2 mb-2">
                    <h1 className="playfair text-5xl font-bold">{bookName}</h1>
                    <p className="work text-xl text-[#13131380]">By:{author}</p>
                  </div>
                  <div className="space-y-2 mb-2">
                    <hr />
                    <p className="text-[#131313CC] work font-semibold text-2xl">{category}</p>
                    <hr />
                  </div>
                  <div className="space-y-2 mb-2">
                    <p className="work text-base text-justify"><span className="text-[#131313] font-bold">Review:</span>{review}</p>
                    <div className="flex items-center gap-2">
                    <p className="work text-base font-bold">Tag</p>
                    {
                      tags?.map(tag => <a className="work text-base text-[#23BE0A] p-3 rounded-3xl bg-[#23BE0A0D] rounded-xl text-center" key={tag}>{tag}</a>)
                    }
                    </div>
                  </div>
                  <hr />
                  <div className="my-4">
                    <p className="work text-base text-[#131313B3]">Number of Pages: <span className="font-bold text-[#131313]">{totalPages}</span></p>
                    <p className="work text-base text-[#131313B3]">Publisher: <span className="font-bold text-[#131313]">{publisher}</span></p>
                    <p className="work text-base text-[#131313B3]">Year of Publishing: <span className="font-bold text-[#131313]">{yearOfPublishing}</span></p>
                    <p className="work text-base text-[#131313B3]">Rating: <span className="font-bold text-[#131313]">{rating}</span></p>
                  </div>
                  <div className=" flex gap-3">
                    <a className="btn text-white work bg-transparent border-2 border-[rgba(19, 19, 19, 0.30)] text-red-500">Read</a>
                    <a className="btn text-white work bg-[#59C6D2] hover:bg-amber-300">Wishlist</a>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default BookDetails;