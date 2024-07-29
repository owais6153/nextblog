import BlogCard from "@/components/BlogCard";
import LatestAndGalleries from "@/components/LatestAndGalleries";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Poster from "@/components/Poster";
import TrendingSection from "@/components/TrendingSection";
import Divider from "@/components/ui/divider";

export default function Archive() {
  return (
    <main className="relative">
      {/* More new */}
      <section>
        <MaxWidthWrapper className={"mt-20"}>
          <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-12 sm:col-span-9">
              <section className="w-full">
                <Divider title={"Archive/Category"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-12">
                  {Array.from({ length: 15 }, (_, index) => (
                    <BlogCard isVertical key={`BlogCard + ${index + 1}`} />
                  ))}
                </div>
              </section>
            </div>
            <div className=" col-span-12 sm:col-span-3">
              <Divider title={"TRENDS"} />{" "}
              <div className="mt-12">
                <TrendingSection />
              </div>
            </div>{" "}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
