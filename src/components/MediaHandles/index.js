import { cn } from "@/lib/utils";

const MediaHandles = () => {
  const styleSocialIcon = (bgClass) => {
    const commonClasses = cn(
      "shrink-0  bg-[rgba(255,255,255,.15)] rounded-full h-10 w-10 flex-all-center cursor-pointer ",
      bgClass
    );
    return commonClasses;
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div className={styleSocialIcon("hover:bg-[#3b5997]")}></div>
      <div className={styleSocialIcon(" hover:bg-[#00aced]")}></div>
      <div
        className={styleSocialIcon(
          "hover:bg-[url(https://thescarletfaithful.com/wp-content/themes/zox-news/images/insta-bg.gif)]"
        )}
      ></div>
      <div className={styleSocialIcon(" hover:bg-[#f00]")}></div>
    </div>
  );
};

export default MediaHandles;
