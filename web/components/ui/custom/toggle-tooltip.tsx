import React from "react";
import { ToggleGroupItem } from "../toggle-group";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "../toggle";
import clsx from "clsx";

export function ToggleGroupItemWithTooltip(
    { children, className, ...props }
        : React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
        VariantProps<typeof toggleVariants>
) {
    return (
        <ToggleGroupItem
            className={clsx(
                "relative group",
                className,
            )}
            {...props}>
            {children}
        </ToggleGroupItem>
    );
}

export function Tooltip({ children, className, ...props }
    : React.ComponentProps<'div'>) {
    return (
        <div className={clsx(
                "opacity-0 group-hover:opacity-100 transition ease-linear duration-250 absolute bg-background text-foreground start-1/1 ms-2.5 rounded-sm w-fit h-fit py-1 px-4 outline-1 shadow-md shadow-black/25 outline-white/15",
                className,
            )} 
            {...props}>
            {children}
        </div>
    );
}