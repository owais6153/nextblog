import BlogCard from "@/components/BlogCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LatesAndGalleries = () => {
  return (
    <>
      {" "}
      <Tabs defaultValue="LATEST" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-4 bg-transparent">
          <TabsTrigger value="LATEST">LATEST</TabsTrigger>
          <TabsTrigger value="GALLERIES">GALLERIES</TabsTrigger>
        </TabsList>
        <TabsContent className="grid space-y-5" value="LATEST">
          {Array.from({ length: 6 }, (_, index) => (
            <BlogCard key={`LATEST + ${index + 1}`} />
          ))}
        </TabsContent>
        <TabsContent className="grid space-y-5" value="GALLERIES">
          {Array.from({ length: 2 }, (_, index) => (
            <BlogCard key={`GALLERIES + ${index + 1}`} />
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LatesAndGalleries;
