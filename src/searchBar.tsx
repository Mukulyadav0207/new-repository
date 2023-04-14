import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;
const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative  flex flex  items-center  px-2 ">
      <BsSearch className="absolute  text-xl " />
      <input
        {...props}
        className="text-right px-2 w-28 font-bold  "
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
