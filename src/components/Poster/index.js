import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";

const Poster = ({
  href = "/post/1",
  sport,
  duration,
  title,
  description,
  src,
}) => {
  return (
    <Link href={href || "#"}>
      <div className="w-full h-auto relative">
        <div className="absolute w-full h-full z-10 bg-black opacity-30 hover:opacity-40  transition-all " />
        <AspectRatio ratio={1 / 1} className="relative">
          <Image
            alt="poster"
            fill
            src={src || "/images/gaetano-cessati-ssguzho__K8-unsplash.jpg"}
            className="object-cover"
          />
        </AspectRatio>
        <div className="absolute w-full bottom-0 z-20 p-5 bg-black-gradient">
          <div className="text-[12px]">
            <span className="text-green-300 font-medium">
              {sport || `Football`}
            </span>
            {" / "}
            <span className="text-white">{duration || `6 month ago`}</span>
          </div>
          <h2 className="text-xl mt-1 font-bold text-white">
            {title ||
              `Nam aliquam ultrices arcu id posuere, et hendrerit dolor.`}
          </h2>
          <p className="text-sm text-white mt-2">
            {description ||
              `Donec dictum iaculis tristique. Curabitur sed risus vestibulum, sodales est et, elementum sem. Quisque pulvinar....`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
