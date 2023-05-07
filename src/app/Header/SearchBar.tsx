import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;
const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative flex items-center px-2 ">
      <BsSearch className="absolute text-xl " />
      <input
        {...props}
        className="px-2 font-bold text-right w-28 "
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
