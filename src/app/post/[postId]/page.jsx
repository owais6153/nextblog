"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link2Icon } from "lucide-react";
import Image from "next/image";

const PostPage = () => {
  return (
    <section className="w-full">
      <MaxWidthWrapper>
        <div className="post-wrapper mt-10">
          <div className="post-into">
            <span className="category uppercase  w-auto px-3  text-sm rounded-full py-1 bg-black text-white font-semibold ">
              FOOTBALL
            </span>
            <h1 className="font-bold text-[32px] leading-[36px] sm:text-[52px] sm:leading-[58px] mt-5">
              Donec dictum iaculis tristique. Curabitur sed risus vestibulum.
            </h1>
            <div className="author-info mt-5 flex gap-3 items-center">
              <Avatar className="w-[54px] h-[54px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-[14px] text-[#a49898]">
                  Published 6 months ago on August 1, 2023
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-[#a49898]">By</span>
                  <span className="text-[14px] text-[#000] flex items-center gap-2">
                    {" "}
                    Aaron Breitman <Link2Icon />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="post-img w-full sm:max-w-[70%] mt-5">
            <AspectRatio ratio={2 / 1.2} className="relative">
              <Image
                alt="poster"
                fill
                src={"/images/chino-rocha-uEtFGfx0m4Q-unsplash.jpg"}
                className="object-cover object-center"
              />
            </AspectRatio>
          </div>
        </div>

        <article className="w-full sm:max-w-[70%]">
          <p className="leading-[16px] text-[12px] text-[#888] my-2">
            Jul 26, 2023; Indianapolis, IN, USA; Rutgers Scarlet Knights head
            coach Greg Schiano speaks to the media during the Big 10 football
            media day at Lucas Oil Stadium. Mandatory Credit: Robert Goddin-USA
            TODAY Sports
          </p>

          {/* icon will be show there */}

          <p className="text-[18px] font-medium mt-4">
            Rutgers football head coach Greg Schiano spoke about a number of
            topics during{" "}
            <span className="hover:border-b-4 cursor-pointer border-b-black hover:bg-red-600 font-semibold hover:text-white">
              his press conference
            </span>{" "}
            at Big Ten Media Days on Wednesday. Entering a critical fourth year
            in his second tenure at Rutgers, training camp is set to begin on
            August 3. Schiano wouldn’t directly answer what his expectations
            were for this season. However, he did express his enthusiasm for
            where the program currently stands.
          </p>
          <p className="text-[16px]  mt-4">
            Rutgers football head coach Greg Schiano spoke about a number of
            topics during{" "}
            <span className="hover:border-b-4 cursor-pointer border-b-black hover:bg-red-600 font-semibold hover:text-white">
              his press conference
            </span>{" "}
            at Big Ten Media Days on Wednesday. Entering a critical fourth year
            in his second tenure at Rutgers, training camp is set to begin on
            August 3. Schiano wouldn’t directly answer what his expectations
            were for this season. However, he did express his enthusiasm for
            where the program currently stands.
          </p>
          <p className="text-[16px]  mt-4">
            Rutgers football head coach Greg Schiano spoke about a number of
            topics during{" "}
            <span className="hover:border-b-4 cursor-pointer border-b-black hover:bg-red-600 font-semibold hover:text-white">
              his press conference
            </span>{" "}
            at Big Ten Media Days on Wednesday. Entering a critical fourth year
            in his second tenure at Rutgers, training camp is set to begin on
            August 3. Schiano wouldn’t directly answer what his expectations
            were for this season. However, he did express his enthusiasm for
            where the program currently stands.
          </p>
          <p className="text-[16px]  mt-4">
            Rutgers football head coach Greg Schiano spoke about a number of
            topics during{" "}
            <span className="hover:border-b-4 cursor-pointer border-b-black hover:bg-red-600 font-semibold hover:text-white">
              his press conference
            </span>{" "}
            at Big Ten Media Days on Wednesday. Entering a critical fourth year
            in his second tenure at Rutgers, training camp is set to begin on
            August 3. Schiano wouldn’t directly answer what his expectations
            were for this season. However, he did express his enthusiasm for
            where the program currently stands.
          </p>
        </article>
      </MaxWidthWrapper>
    </section>
  );
};

export default PostPage;
