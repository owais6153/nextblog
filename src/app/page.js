import BlogCard from "@/components/BlogCard";
import { Icons } from "@/components/Icons";
import Header from "@/components/Layout/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MediaHandles from "@/components/MediaHandles";
import Poster from "@/components/Poster";
import Divider from "@/components/ui/divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* Hero Section Layout start */}
      <div className="w-full py-4">
        <MaxWidthWrapper>
          <div className="w-full h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {/* Trending section */}
            <div className="bg-white w-full min-h-[200px] px-4">
              <Divider className={"mt-4 mb-6"} title={"TRENDING"} />
              <div className="px-4 grid space-y-5">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>

            {/* Live or main section */}
            <div className="h-full flex flex-col gap-4 order-last md:order-none mt-10 md:mt-0 ">
              <Poster />
              <Poster />
            </div>

            {/* Latest section */}
            <div className="bg-black-500 w-full h-full px-4  mt-5 md:mt-0  ">
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

      {/* More new */}
      <section>
        <MaxWidthWrapper className={"mt-20"}>
          <Divider title={"MORE NEWS"} />
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className=" col-span-12 sm:col-span-9">
              <div className="border-y py-2  w-full  sm:max-w-[90%] h-auto">
                <BlogCard
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, neque ut interdum molestie, mauris mauris tincidunt tellus, vel posuere dui leo non massa. Integer pharetra eleifend faucibus. Sed in orci rutrum, ultrices Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, neque ut interdum molestie, mauris mauris tincidunt tellus, vel posuere dui leo non massa. Integer pharetra eleifend faucibus. Sed in orci rutrum, ultrices`}
                  titleClasses="!leading-[32px] text-[24px] sm:!leading-[38px]  sm:text-[32px]"
                  imageContainerClasses="w-full sm:w-[300px] h-auto"
                  containerClasses="flex-col sm:flex-row "
                />
              </div>
            </div>

            <div className=" col-span-12 sm:col-span-3">
              <Divider title={"TWEETS"} />
            </div>
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
