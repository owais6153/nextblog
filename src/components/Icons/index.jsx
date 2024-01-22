import Image from "next/image";

export const Icons = {
  mainLogo: (props) => (
    <div className="relative w-[150px] h-[150px]">
      <Image alt="main-logo" fill src={"/images/logo.png"} />
    </div>
  ),
};

