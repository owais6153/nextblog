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
  imageContainerClasses = "",
  titleClasses = '',
  description,
  containerClasses,
}) => {
  if (isVertical) {
    return (
      <Link className="" href={href || "#"}>
        <div className={cn("")}>
          <div className={cn("w-full h-full", imageContainerClasses)}>
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
            <h2 className="text-[19px] mt-[5px] leading-[23px] font-bold text-black">
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
      <div className={cn("flex items-start gap-3", containerClasses)}>
        <div className={cn("h-[80px] w-[80px]", imageContainerClasses)}>
          <AspectRatio ratio={1 / 1} className="relative">
            <Image
              alt="poster"
              fill
              src={src || "/images/poster-img1.jpeg"}
              className="object-cover"
            />
          </AspectRatio>
        </div>

        <div className=" flex-1 relative">
          <div className="text-[11px]">
            <span className="text-[#aaa] font-semibold">
              {sport || `Football`}
            </span>
            {" / "}
            <span className="text-[#aaa] font-medium">
              {duration || `6 month ago`}
            </span>
          </div>
          <h2 className={cn("text-[14px] mt-[5px] leading-[18px] font-bold text-black", titleClasses)}>
            {title ||
              `Can Rutgers take advantage of enough breaks that come their way this season?`}
          </h2>
          {description && (
            <p className="text-[18px] text-[#5555] mt-2 h-[170px] overflow-hidden">
              {description ||
                `Training camp for Rutgers football begins on Thursday, August 3. While it’s clear who the most indispensable players are heading...`}{" "}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
