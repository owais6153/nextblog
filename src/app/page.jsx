import BlogCard from "@/components/BlogCard";
import { Icons } from "@/components/Icons";
import LatestAndGalleries from "@/components/LatestAndGalleries";
import Header from "@/components/Layout/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MediaHandles from "@/components/MediaHandles";
import Poster from "@/components/Poster";
import TrendingSection from "@/components/TrendingSection";
import Divider from "@/components/ui/divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section Layout start */}
      <div className="w-full py-4">
        <MaxWidthWrapper>
          <div className="w-full h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {/* Trending section */}
            <div className="bg-white w-full min-h-[200px] px-4">
              <Divider className={"mt-4 mb-6"} title={"TRENDING"} />
              <TrendingSection />
            </div>

            {/* Live or main section */}
            <div className="h-full flex flex-col gap-4 order-last md:order-none mt-10 md:mt-0 ">
              <Poster />
              <Poster />
            </div>

            {/* Latest section */}
            <div className="bg-black-500 w-full h-full px-4  mt-5 md:mt-0  ">
              <LatestAndGalleries />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      {/* Hero Section Layout close */}

      {/* catalog */}

      {Array.from({ length: 2 }, (_, index) => (
        <section key={index + 1} className="w-full">
          <MaxWidthWrapper className={"mt-20"}>
            <Divider title={"Football"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 mt-12">
              {Array.from({ length: 4 }, (_, index) => (
                <BlogCard isVertical key={`BlogCard + ${index + 1}`} />
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      ))}

      {/* More new */}
      <section>
        <MaxWidthWrapper className={"mt-20"}>
          <Divider title={"MORE NEWS"} />
          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className=" col-span-12 sm:col-span-9">
              <div className="border-y py-2  w-full  sm:max-w-[90%] h-auto">
                {Array.from({ length: 20 }, (_, index) => (
                  <>
                    {index % 5 === 0 ? (
                      <div className="mt-12" key={`BlogCard + ${index + 1}`}>
                        <BlogCard isVertical />
                      </div>
                    ) : (
                      <BlogCard
                        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, neque ut interdum molestie, mauris mauris tincidunt tellus, vel posuere dui leo non massa. Integer pharetra eleifend faucibus. Sed in orci rutrum, ultrices Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, neque ut interdum molestie, mauris mauris tincidunt tellus, vel posuere dui leo non massa. Integer pharetra eleifend faucibus. Sed in orci rutrum, ultrices`}
                        titleClasses="!leading-[32px] text-[24px] sm:!leading-[38px]  sm:text-[32px]"
                        imageContainerClasses="w-full sm:w-[300px] h-auto"
                        containerClasses="flex-col sm:flex-row mt-12 "
                      />
                    )}
                  </>
                ))}
              </div>
            </div>

            <div className=" col-span-12 sm:col-span-3">
              <Divider title={"TWEETS"} />{" "}
              <div className="mt-12">
                <TrendingSection />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
