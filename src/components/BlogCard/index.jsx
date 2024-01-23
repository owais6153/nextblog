"use client";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  href,
  sport,
  duration,
  title,
  src,
  isVertical = false,
}) => {
  if (isVertical) {
    return (
      <Link className="" href={href || "#"}>
        <div className={cn("")}>
          <div className={cn("w-full h-full")}>
            <AspectRatio ratio={2 / 1.2} className="relative">
              <Image
                alt="poster"
                fill
                src={src || "/images/card-v.jpeg"}
                className="object-cover object-center"
              />
            </AspectRatio>
          </div>
          <div className=" mt-2  ">
            <div className="text-[11px]">
              <span className="text-[#aaa] font-semibold">
                {sport || `Football`}
              </span>
              {" / "}
              <span className="text-[#aaa] font-medium">
                {duration || `6 month ago`}
              </span>
            </div>
            <h2 className="text-[14px] mt-[5px] leading-[18px] font-bold text-black">
              {title ||
                `Can Rutgers take advantage of enough breaks that come their way this season?`}
            </h2>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link className="" href={href || "#"}>
      <div className={cn("flex items-start gap-3")}>
        <div className={cn("h-[80px] w-[80px]")}>
          <AspectRatio ratio={1 / 1} className="relative">
            <Image
              alt="poster"
              fill
              src={src || "/images/poster-img1.jpeg"}
              className="object-cover"
            />
          </AspectRatio>
        </div>

        <div className=" flex-1 ">
          <div className="text-[11px]">
            <span className="text-[#aaa] font-semibold">
              {sport || `Football`}
            </span>
            {" / "}
            <span className="text-[#aaa] font-medium">
              {duration || `6 month ago`}
            </span>
          </div>
          <h2 className="text-[14px] mt-[5px] leading-[18px] font-bold text-black">
            {title ||
              `Can Rutgers take advantage of enough breaks that come their way this season?`}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
