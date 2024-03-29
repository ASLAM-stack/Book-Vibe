import { useState } from "react";
import { Link, Outlet, json } from "react-router-dom";

 

const ListedBook = () => {
    const [tabIndex,setTabIndex] = useState(0);
    
    
    return (
        <div className="mt-12">
           <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link to='' onClick={()=>setTabIndex(0)}
              rel="noopener noreferrer"
              
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ?'border border-b-0' : 'bordder-b' }  dark:border-gray-600 dark:text-gray-600 rounded-t-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Read Books</span>
            </Link>
            <Link to={`listofbooks`} onClick={()=>setTabIndex(1)}
              rel="noopener noreferrer"
               
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ?'border border-b-0' : 'bordder-b' }  dark:border-gray-600 dark:text-gray-600 rounded-t-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Wishlist Books</span>
            </Link>
            <Outlet></Outlet>
          </div>
          {/* tabs end  */}
          
    </div>
    );
};

export default ListedBook;