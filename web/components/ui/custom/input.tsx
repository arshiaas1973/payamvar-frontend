import clsx, { ClassValue } from "clsx"
import { Input as SInput } from "../input";

export default function Input({ className, ...props }: React.ComponentProps<"input">) {
    return (
        <SInput className={clsx(
            "p-2 focus:shadow-none ring-0 focus:ring-0 focus-visible:ring-1 focus-visible:ring-zinc-500",
            className
        )} {...props} />
    );
}