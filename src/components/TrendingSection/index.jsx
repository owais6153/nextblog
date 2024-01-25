import BlogCard from "../BlogCard";
import Divider from "../ui/divider";

const TrendingSection = () => {
  return (
    <>
      <div className="px-4 grid space-y-5">
        {Array.from({ length: 8 }, (_, index) => (
          <BlogCard key={`GALLERIES + ${index + 1}`} />
        ))}
      </div>
    </>
  );
};

export default TrendingSection;
