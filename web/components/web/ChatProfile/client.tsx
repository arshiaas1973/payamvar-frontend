'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LazyIcon from "@/components/ui/custom/lazyicon";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import clsx from "clsx";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

export default function ChatProfileClient() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col px-4 gap-6">
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
                <Separator className="w-[calc(100%-120px)]! mx-auto h-[1.5px]! bg-linear-to-r from-transparent from-10% to-90% via-white/20 via-50% to-transparent" />
                <div className="flex flex-row min-w-full w-fit gap-4">
                    <ScrollArea className="h-82 grow flex-1 w-fit border rounded-2xl bg-colored-secondary/15 p-2 overflow-hidden">
                        <div className="grow flex-1 w-fit grid grid-cols-3 gap-2 rounded-2xl">
                            {
                                [0, 1, 2, 3, 4, 5].map((_, index, array) => (
                                    <div className={
                                        clsx(
                                            "flex aspect-square w-40 relative overflow-hidden bg-transparent col-span-1 row-span-1",
                                            index == 0 && "rounded-none rounded-tl-xl",
                                            index == 2 && "rounded-none rounded-tr-xl",
                                            index == array.length - 1 && "rounded-none rounded-br-xl",
                                            index == array.length - 3 && "rounded-none rounded-bl-xl",
                                        )}>
                                        <Image
                                            src={"https://picsum.photos/seed/picsum/400/400"}
                                            alt="Chat Background"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                    <div className="flex flex-col gap-1 shrink-0 w-fit">
                        <ToggleGroup type="multiple" variant="outline" orientation="vertical" spacing={2} size="sm">
                            <ToggleGroupItem
                                value="star"
                                aria-label="Toggle star"
                                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
                            >
                                <LazyIcon name="streamline-plump:recording-tape-1-remix" className="size-5" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="heart"
                                aria-label="Toggle heart"
                                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                            >
                                <HeartIcon />
                                Heart
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}