import {
    SearchIcon,
    XCircle
} from "lucide-react";
import { Input } from "../ui/input";

const SearchModal = ({ isVisible, onClose }) => {
  return (
    <>
      <div
        className={`transition-all h-screen w-full bg-black px-4 ${
          isVisible ? "z-[1000]" : "-z-[1]"
        } fixed duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
        }`}
      >
        <span onClick={onClose} className="absolute right-8 top-8">
          <XCircle size={32} color="#fff" className="cursor-pointer" />
        </span>
        <div className="flex h-full w-full max-w-5xl justify-between mx-auto px-4 relative items-center">
        <Input
          className="  bg-transparent text-white  flex h-[48px] bg-none text-[18px]"
          placeholder="Search"
        />
  
          <SearchIcon
            onClick={onClose}
            color="#fff"
            className=" absolute cursor-pointer right-6  mt-[2px]  rounded-sm  bg-black "
            size={32}
          />
       
        </div>
      </div>
    </>
  );
};

export default SearchModal;
