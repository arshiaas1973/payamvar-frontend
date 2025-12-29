import clsx from "clsx";
import Link from "next/link";
import type { DisplayInputContentType, DisplayInputLabelType, DisplayInputType } from "./types";

export function DisplayInput({
    className,
    children,
    ...props
}: DisplayInputType) {
    return (
        <div className={clsx(
            "flex flex-row w-full max-w-full h-full relative bg-background text-foreground border-2 border-(--label-bg) px-4 pt-5 pb-2 rounded-xl items-center",
            className
        )} {...props}>
            {children}
        </div>
    )
}
export function DisplayInputLabel({
    className,
    label,
    ...props
}: DisplayInputLabelType) {
    if (label !== null && label.length > 0) {
        return (
            <span className={clsx(
                "bg-(--label-bg) font-secondary px-3 py-0.5 max-w-[calc(100%-32px)] line-clamp-1 text-white rounded-b-lg w-fit h-fit font-semibold text-xs absolute top-0 left-4 text-wrap text-ellipsis wrap-break-word",
                className
            )} {...props}>
                {label}
            </span>
        )
    }
    return null;
}

export function DisplayInputContent({
    className,
    children,
    mode,
    type,
    options,
    ...props
}: DisplayInputContentType) {
    const item = {
        props: {
            className: clsx(
                "font-primary p-0! line-clamp-1 truncate text-ellipsis w-full",
                {
                    paragraph: "text-[17px] font-semibold my-2",
                    heading: "text-[28px] font-bold!",
                }[mode] ?? "text-base",
            ),
            ...props
        },
        children,
    }
    switch (type) {
        case "normal":
            return (
                <h1 {...item.props} className={clsx(
                    item.props.className,
                    className,
                )}>
                    {item.children}
                </h1>
            )
        case "link":
            return (
                <Link {...item.props} className={clsx(
                    item.props.className,
                    "text-sky-800! hover:text-blue-500! transition-colors duration-250 ease-linear",
                    className,
                )}
                    href={options?.url ?? "#"}>
                    {item.children}
                </Link>
            )
        default:
            return null;
    }

}