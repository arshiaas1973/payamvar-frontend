'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { create } from "zustand";
import ChatProfile from "../ChatProfile";
import { Button } from "@/components/ui/button";
import LazyIcon from "@/components/ui/custom/lazyicon";

const useStore = create<{
    isProfileShown: boolean,
    toogleProfileVisibility: () => void,
}>((set) => ({
    isProfileShown: false,
    toogleProfileVisibility: () => set((state) => ({ isProfileShown: !state.isProfileShown })),
}));

export function ChatHeaderClient() {
    const { ...store } = useStore();
    return (
        <div className="flex flex-row items-center justify-between px-5 py-4.5 h-full w-full bg-tertiary-background">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex flex-row items-center gap-3 select-none cursor-pointer" onClick={() => {
                        store.toogleProfileVisibility();
                    }}>
                        <Avatar className="w-10 h-10">
                            <AvatarImage width={40} height={40} />
                            <AvatarFallback>
                                <button className="cursor-pointer w-10 aspect-square rounded-full" type="button">
                                    AE
                                </button>
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5">
                            <h1 className="text-xl font-(primary) font-semibold">User</h1>
                            <p className="text-xs font-(primary) font-bold ms-1 text-(--secondary-color)">Online</p>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent showCloseButton={false} className="h-fit! min-w-lg! p-0! w-fit! max-w-2xl! bg-(--main-surface-color)!">
                    <ChatProfile />
                </DialogContent>
            </Dialog>
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row-reverse items-center h-full relative cursor-pointer bg-colored-secondary/45 text-white rounded-full p-1 gap-1.5">
                    <Button className="rounded-full outline-none! border-0! bg-secondary-background/50! peer" variant="outline">
                        <LazyIcon name="line-md:list" className="size-full aspect-square" />
                    </Button>
                    <div className="w-0 origin-right scale-x-0 h-full rounded-full bg-colored-secondary/60 flex flex-row peer-hover:w-20! peer-hover:scale-x-100! transition-all duration-300 ease-linear">
                        <Button className="rounded-full outline-none! border-0! bg-secondary-background/90!" variant="outline">
                            <LazyIcon name="line-md:list" className="size-full aspect-square" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}