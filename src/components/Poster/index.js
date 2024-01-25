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
            src={src || "/images/poster-img1.jpeg"}
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
              `Rutgers football: Potential breakout players on offense this season`}
          </h2>
          <p className="text-sm text-white mt-2">
            {description ||
              `Training camp for Rutgers football begins on Thursday, August 3. While it’s clear who the most indispensable players are heading...`}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
