import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const ListCard = ({ book }) => {
   
  const {
    category,
    tags,
    rating,
    image,
    author,
    bookName,
    totalPages,
    publisher,
    review,
    yearOfPublishing,bookId
  } = book;
  return (
    <div className="card card-side bg-base-100 shadow-xl p-8 border-2 flex-col md:flex-row">
      <figure className="w-full md:w-[20%] h-[250px] p-6 bg-[#F3F3F3] rounded-xl">
        <img className="w-[60%]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="space-y-4">
          <h1 className="playfair text-2xl font-bold">{bookName}</h1>
          <p className="work font-medium text-base text-[#131313CC]">
            By:{author}
          </p>
        </div>
        <div className="space-y-2 mb-2">
          <div>
            <div className="flex gap-3 flex-wrap">
              <div className="flex justify-start items-center">
                <div className="w-[50px]">
                  <p className="work text-base font-bold">Tag</p>
                </div>
                <div
                  className="flex
                    gap-5 flex-wrap"
                >
                  {tags?.map((tag) => (
                    <a
                      className="work text-base text-[#23BE0A] py-1 px-2 rounded-3xl bg-[#23BE0A0D]  text-center"
                      key={tag}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                <IoLocationOutline />
                <p className="work font-medium text-base text-[#131313CC]">
                  Year of Publishing: {yearOfPublishing}
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex
            gap-3"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <IoPeopleOutline className="text-[#13131399] text-lg" />
              <p className="text-[#13131399] work  text-base">
                Publisher: {publisher}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <MdContactPage className="text-[#13131399] text-lg" />
              <p className="text-[#13131399] work  text-base">
                Page {totalPages}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="flex gap-4 flex-wrap
         mt-2"
        >
          <div className="md:space-x-5 space-y-4 mt-2">
            <a className="work text-base text-[#23BE0A] py-2 px-2  rounded-3xl bg-[#23BE0A0D]  text-center">
              Category:{category}
            </a>
            <a className="work text-base text-[#23BE0A] py-2 px-2  rounded-3xl bg-[#23BE0A0D]   text-center">
              {" "}
              Ratings:{rating}
            </a>
          </div>
           <Link to={`/book/${bookId}`} className="px-4 py-2 bg-[#45b434] text-white flex items-center justify-center rounded-full">
           <a 
           >View Details</a>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
