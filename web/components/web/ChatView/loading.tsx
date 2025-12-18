'use client';

import { Input } from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export function ChatViewLoading() {
    return (
        <div className="w-full h-full flex flex-col bg-(--chat-background) py-2 px-4">
            <ScrollArea className="w-full h-full">
                <div className="w-full h-full">
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="w-full h-fit flex-1 shrink-0 py-0.5 flex flex-row items-center relative">
                <Input className="w-full rounded-2xl h-12 text-lg font-tertiary ps-11 pe-34" />
                <Skeleton className="w-7 h-8.5" />
                <div className="absolute end-2 top-1/2 -translate-y-1/2 flex flex-row gap-1.5 h-fit w-fit items-center">
                    <Skeleton className="w-7 h-8.5" />
                    <Skeleton className="w-25 h-8.5" />
                </div>

            </div>
        </div>
    )
}