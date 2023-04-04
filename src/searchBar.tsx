import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;
const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative ">
      <input
        {...props}
        className="bg-indigo-200 "
        type="text"
        placeholder="Search"
      />
      <BsSearch className="absolute right-1 top-1/2 -translate-y-1/2 " />
    </div>
  );
};

export default SearchBar;
