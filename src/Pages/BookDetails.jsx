import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
 

const BookDetails = () => {
    const book = useLoaderData();
    const {bookId} = useParams();
    const [singelBook,setsingelBook] = useState([]);
   
    useEffect(() =>{
      const newBook = book.find(b => b.bookId == bookId);
      setsingelBook(newBook);
    },[bookId,book])
    const {category,tags,rating,image,author,bookName,totalPages,publisher,review,yearOfPublishing} = singelBook;
    
    const saveRead = JSON.parse(localStorage.getItem('read') || '[]');
    const saveWish = JSON.parse(localStorage.getItem('wish') || '[]');
    
const [readlist,setaReadlist] = useState([...saveRead]);
const [wishlist,setWishlist] = useState([...saveWish]);

const handleRead = (book) =>{
   
  const isExist = readlist.find(b => b.bookId == book.bookId);
  const isExistWishList =wishlist.filter(xbook => xbook.bookId !== book.bookId)

  if(!isExist){
    setaReadlist([...readlist,book])
    setWishlist([...isExistWishList])
    toast.success(`Added Read ${book.bookName}`)
    
  }
  else{
    toast.error(`Already Added ${book.bookName}`)
  }
  
}
const localRead = JSON.stringify(readlist);
 localStorage.setItem('read',localRead)

const handleWish =(wish)=>{
  const isRead = readlist.find(b => b.bookId == wish.bookId)
  const isExistWish = wishlist.find(w => w.bookId == wish.bookId);
  if (!isExistWish && !isRead) {
    setWishlist([...wishlist,wish])
    toast.success(`Added Wishlist ${wish.bookName}`)
  }
  else{
    toast.error(`Already Added in Read or Wishlist: ${wish.bookName}`)
  }
} 
const loadWish = JSON.stringify(wishlist);
localStorage.setItem('wish',loadWish);
 

 
    
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
                    <a className="btn text-black work bg-transparent border-2 border-[rgba(19, 19, 19, 0.30)]" onClick={()=> handleRead(singelBook)}>Read</a>
                    <a className="btn text-white work bg-[#59C6D2] hover:bg-amber-300" onClick={()=>handleWish(singelBook)}>Wishlist</a>
                    </div>
                </div>
             </div>
             <ToastContainer />
        </div>
    );
};

export default BookDetails;