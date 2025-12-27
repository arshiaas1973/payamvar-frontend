import clsx from "clsx";

export function DisplayInput({
    className,
    children,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={clsx(
            "flex flex-row w-full max-w-full h-full relative bg-background text-foreground border-2 border-(--label-bg) px-4 pt-5 pb-2 rounded-xl",
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
}: React.ComponentProps<'div'> & {
    label: string | null
}) {
    if (label !== null && label.length > 0) {
        return (
            <span className={clsx(
                "bg-(--label-bg) font-secondary px-3 py-0.5 max-w-[calc(100%-32px)] line-clamp-1 text-white rounded-b-lg w-fit h-fit font-semibold text-xs absolute top-0 left-4 text-wrap wrap-break-word",
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
    ...props
}: React.ComponentProps<'h1'>) {
    return (
        <h1 className={clsx(
            "font-primary font-bold! text-[28px] p-0! line-clamp-1 truncate w-full",
            className
        )} {...props}>
            {children}
        </h1>
    );

}