const SearchBar = ({ theme, text, value, onChange }) => {
    return (
      <div className="w-full ">
        <div className={`relative ${theme.includes("light") ? "bg-white text-gray-700" : "bg-gray-800 text-gray-200"} flex items-center h-12 rounded-3xl shadow-md overflow-hidden`}>
          <div className={`grid w-1/6 cursor-pointer pl-2 place-items-center h-full  ${theme.includes("light") ? "bg-white text-gray-300" : "bg-gray-800 text-gray-200"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className={`h-full w-5/6 px-2  ${theme.includes("light") ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"} outline-none text-sm`}
            type="text"
            id="search"
            placeholder={text}
            value={value}
            onChange={onChange}
  
  
            />
        </div>
        
      </div>
    );
  };
  
  export default SearchBar;
  