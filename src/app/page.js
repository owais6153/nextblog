import BlogCard from "@/components/BlogCard";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MediaHandles from "@/components/MediaHandles";
import Poster from "@/components/Poster";
import Divider from "@/components/ui/divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { navigationRoutes } from "@/constants/navigation-routes";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  return (
    <main className="relative">
      {/* Header Start */}
      <header className="w-full h-[180px] bg-black flex items-center ">
        <MaxWidthWrapper className={"flex items-center flex-1"}>
          <div className="">
            <MediaHandles />
          </div>
          <div className="ml-[27.5%]">
            <Icons.mainLogo />
          </div>
        </MaxWidthWrapper>
      </header>
      {/* Header close */}

      {/* Nav Bar start */}
      <nav className="w-full bg-white h-[44px] border-b hidden md:block">
        <MaxWidthWrapper
          className={"flex items-center justify-between flex-1 h-full"}
        >
          <div>
            <Icons.bar />
          </div>

          <div className="sm:flex space-x-[14px] items-center hidden">
            {navigationRoutes.map((nav) => {
              return (
                <span
                  className="text-[14px] font-semibold text-[#AAA] hover:text-black "
                  key={uuidv4()}
                >
                  {nav?.title}
                </span>
              );
            })}
          </div>

          <div>
            <Icons.search />
          </div>
        </MaxWidthWrapper>
      </nav>
      {/* Nav Bar close */}

      {/* Hero Section Layout start */}
      <div className="w-full py-4">
        <MaxWidthWrapper>
          <div className="w-full h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {/* Trending section */}
            <div className="bg-white w-full min-h-[200px] px-4">
              <Divider className={"mt-4"} title={"TRENDING"} />
            </div>

            {/* Live or main section */}
            <div className="h-full flex flex-col gap-4 order-last md:order-none mt-10 md:mt-0 ">
              <Poster />
              <Poster />
            </div>

            {/* Latest section */}
            <div className="bg-black-500 w-full h-full px-4   ">
              <Tabs defaultValue="LATEST" className="w-full">
                <TabsList className="grid w-full grid-cols-2 gap-4 bg-transparent">
                  <TabsTrigger value="LATEST">LATEST</TabsTrigger>
                  <TabsTrigger value="GALLERIES">GALLERIES</TabsTrigger>
                </TabsList>
                <TabsContent className="grid space-y-5" value="LATEST">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </TabsContent>
                <TabsContent className="grid space-y-5" value="GALLERIES">
                  <BlogCard />
                  <BlogCard />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      {/* Hero Section Layout close */}

      {/* catalog */}

      <section className="w-full">
        <MaxWidthWrapper className={"mt-20"}>
          <Divider title={"Football"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 mt-12">
            <BlogCard isVertical />
            <BlogCard isVertical />
            <BlogCard isVertical />
            <BlogCard isVertical />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* footer */}
      <footer className="w-full min-h-[200px] bg-black mt-20">
        <MaxWidthWrapper className={"flex items-center flex-col gap-9 py-12 "}>
          <div>
            <Icons.mainLogo />
          </div>
          <div className="">
            <MediaHandles />
          </div>
        </MaxWidthWrapper>
        <p className="w-full bg-gray-950 py-4 text-white text-center text-sm">
          Copyright © 2023 The Scarlet Faithful. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
