import { Link } from "react-router-dom";
import "../MainLayOut/main.css";
import { MdStarOutline } from "react-icons/md";
const Book = ({book}) => {
    const {category,tags,rating,image,author,bookName,bookId} = book;
    return (
        <Link to={`/book/${bookId}`} className="card  bg-base-100 shadow-xl border-2">
  <figure className="px-8 pt-8 ">
    <div className="bg-[#F3F3F3] w-full flex justify-center items-center rounded-xl p-4">
    <img  src={image} alt={bookName} className=" h-80  " />
    </div>
    
  </figure>
  <div className="card-body">
    <div className="flex gap-3 flex-wrap">
        {
            tags?.map(tag=> <a className="work text-base text-[#23BE0A] p-3 rounded-3xl bg-[#23BE0A0D] rounded-xl text-center" key={tag}>{tag}</a>)
        }
    </div>
    <h2 className="card-title Playfair font-bold text-2xl">{bookName}</h2>
    <p className="text-base work font-medium">By:{author} </p>
    <hr className="border-dashed"/>
    <div className="card-actions justify-between">
       <div>
          <p className="text-base work font-medium">{category}</p>
       </div>
       <div className="flex items-center gap-1">
        <p className="work text-base font-medium">{rating}</p>
        <MdStarOutline  className="text-lg text-slate-600 "/>
       </div>
    </div>
  </div>
</Link>
    );
};

export default Book;