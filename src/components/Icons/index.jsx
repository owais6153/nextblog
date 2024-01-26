import Image from "next/image";

export const Icons = {
  mainLogo: (props) => (
    <div className="relative w-[150px] h-[150px]">
      <Image alt="main-logo" fill src={"/images/logo.png"} />
    </div>
  ),
  facebook: (props) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/images/facebook.svg"} />
    </div>
  ),
  twitter: (props) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/images/twitter.svg"} />
    </div>
  ),
  instagram: (props) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/images/instagram.svg"} />
    </div>
  ),
  youtube: (props) => (
    <div className="relative w-[20px] h-[20px]">
      <Image alt="main-logo" fill src={"/images/youtube.svg"} />
    </div>
  ),
  bar: (props) => (
    <div className="relative w-[24px] h-[24px]">
      <Image alt="main-logo" fill src={"/images/bar.svg"} />
    </div>
  ),
  search: ({onOpenSearch}) => (
    <div onClick={onOpenSearch} className="relative w-[24px] h-[24px]">
      <Image alt="main-logo" fill src={"/images/search.svg"} />
    </div>
  ),
};

