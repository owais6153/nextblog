import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function checkImageUrl(url) {
  const domain = "https://api.api-ninjas.com/";

  if (url.includes(domain)) return true;
  else return false;
}
export const imageLoader = ({ src, width, quality }) => {
  if (checkImageUrl(src)) return src;
  else return false;
};
