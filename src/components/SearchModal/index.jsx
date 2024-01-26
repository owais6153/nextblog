import {
    SearchIcon,
    XCircle
} from "lucide-react";
import { Input } from "../ui/input";

const SearchModal = ({ isVisible, onClose }) => {
  return (
    <>
      <div
        className={`transition-all h-screen w-full bg-black ${
          isVisible ? "z-[1000]" : "-z-[1]"
        } fixed duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
        }`}
      >
        <span onClick={onClose} className="absolute right-8 top-8">
          <XCircle size={32} color="#fff" className="cursor-pointer" />
        </span>
        <Input
          className="m-auto after:content-['_↗']  bg-transparent text-white absolute w-full max-w-[50%] top-[40%] left-[25%] placeholder:text-slate-400 h-[48px] bg-none text-[16px]"
          placeholder="Search"
        />
        <div
          className="max-w-[50%] flex top-[40%] left-[25%] absolute w-full"
          variant={"outline"}
        >
          <SearchIcon
            onClick={onClose}
            color="#fff"
            className=" absolute cursor-pointer right-5 top-2 rounded-sm  bg-black "
            size={32}
          />
        </div>
      </div>
    </>
  );
};

export default SearchModal;
