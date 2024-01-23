import { cn } from "@/lib/utils"

const Divider = ({className, title, position,}) => {
  return (
    <div className={cn("w-full relative bg-black h-[1px] flex justify-center", className, {
        'justify-end': position === 'right',
        'justify-start': position === 'left',
    })}>
        {/* <hr className="border-1 border-black flex-1" /> */}
        <span className={cn("uppercase absolute w-auto px-3 -top-3 text-sm rounded-full py-1 bg-black text-white mx-auto")}>{title || 'Title'}</span>
    </div>
  )
}

export default Divider