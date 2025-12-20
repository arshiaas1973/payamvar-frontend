'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LazyIcon from "@/components/ui/custom/lazyicon";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import Image from "next/image";

export default function ChatProfileClient() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col px-4 gap-4">
                <div className="flex flex-row items-center justify-between gap-4 w-full h-fit">
                    <div className="flex flex-row items-center gap-5">
                        <Avatar className={clsx("h-15 w-15 outline-offset-3 outline-2 outline-colored-primary rounded-tl-[90%] rounded-tr-[70%_100%] rounded-bl-[60%] rounded-br-[80%_50%] hover:rounded-full transition-all! duration-300! ease-linear!")}>
                            <AvatarImage src={"https://picsum.photos/seed/picsum/200/300"} />
                            <AvatarFallback className="rounded-tl-[90%] rounded-tr-[70%_100%] rounded-bl-[60%] rounded-br-[80%_50%] hover:rounded-full">AE</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center gap-0.5">
                            <h1 className="font-tertiary text-xl font-semibold line-clamp-1">[User's Name]</h1>
                            <h3 className="font-tertiary text-sm font-bold text-white/50 hover:text-white/75 transition-colors duration-250 ease-linear line-clamp-1">@[User's Username]</h3>
                        </div>
                    </div>
                    <DialogClose asChild>
                        <Button className="bg-transparent border-0 text-white/50 hover:text-white/75 hover:bg-transparent! cursor-pointer p-2! transition-colors ease-linear duration-250">
                            <LazyIcon name="line-md:close" className="size-5" />
                        </Button>
                    </DialogClose>
                </div>
                <Separator className="w-[calc(100%-120px)]! mx-auto h-0.5! bg-linear-to-r from-transparent via-white/20 via-50% to-transparent" />
                <div className="flex flex-col">
                    sakljsalkj
                </div>
            </div>
        </div>
    )
}