'use client';

import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import clsx from "clsx";
import Image from "next/image";

export default function ChatProfileClient() {
    return (
        <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                <div className={clsx(
                        "w-16 aspect-square",
                        true && "bg-[url(https://picsum.photos/seed/picsum/200/300)]",
                    )}>
                    <Image className="backdrop-blur-3xl rounded-full" src={"https://picsum.photos/seed/picsum/200/300"} fill={true} alt="@profile"/>
                </div>
            </DialogDescription>
        </DialogHeader>
    )
}