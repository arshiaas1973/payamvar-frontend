'use client';

import { Skeleton } from "@/components/ui/skeleton";

export function ChatHeaderLoading(){
    return (
        <div className="flex flex-row items-center justify-between px-5 py-4.5 h-full w-full">
            <div className="flex flex-row items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full"/>
                <div className="flex flex-col gap-1">
                    <Skeleton className="w-40 h-5 rounded-full" />
                    <Skeleton className="w-20 h-4 rounded-full ms-1" />
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
            </div>
        </div>
    )
}