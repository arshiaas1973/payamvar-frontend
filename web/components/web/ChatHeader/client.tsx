'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { create } from "zustand";
import ChatProfile from "../ChatProfile";
import { Button } from "@/components/ui/button";
import LazyIcon from "@/components/ui/custom/lazyicon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import clsx from "clsx";

const useStore = create<{
    isProfileShown: boolean,
    isProfileMenuOpened: boolean,
    toggleProfileVisibility: () => void,
    toggleProfileMenuOpened: () => void,
}>((set) => ({
    isProfileShown: false,
    isProfileMenuOpened: false,
    toggleProfileVisibility: () => set((state) => ({ isProfileShown: !state.isProfileShown })),
    toggleProfileMenuOpened: () => set((state) => ({ isProfileMenuOpened: !state.isProfileMenuOpened })),
}));

export function ChatHeaderClient() {
    const { ...store } = useStore();
    return (
        <div className="flex flex-row items-center justify-between px-5 py-4.5 h-full w-full bg-tertiary-background">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex flex-row items-center gap-3 select-none cursor-pointer" onClick={() => {
                        store.toggleProfileVisibility();
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
                <div className="flex flex-row-reverse items-center h-full relative cursor-pointer bg-tertiary-background text-white rounded-full p-1 gap-1.5" /* bg-colored-secondary/45 */
                    onClick={() => {
                        store.toggleProfileMenuOpened();
                    }}
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button className="rounded-sm outline-none! bg-tertiary-background! border-0! peer" variant="outline">
                                {
                                    store.isProfileMenuOpened ? (
                                        <LazyIcon name="line-md:menu" className="size-full aspect-square" alt="Menu" />
                                    ) : (
                                        <LazyIcon name="mdi:dots-vertical" className="size-full aspect-square" alt="Menu" />
                                    )
                                }
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="font-secondary">
                            <DropdownMenuGroup>
                                {
                                    [
                                        {value: "Ban", icon: "line-md:ban", color:"var(--color-red-500)"}
                                    ].map((item) => (
                                        <DropdownMenuItem>
                                            <div className={clsx(
                                                "flex flex-row justify-center gap-2 font-semibold w-full",
                                                )}
                                                style={{
                                                    fontFamily: item?.color,
                                                }}>
                                                <LazyIcon name="line-md:ban" />
                                                <span>
                                                    dsjkdsj
                                                </span>
                                            </div>
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <div className="w-0! origin-right h-full rounded-full bg-colored-secondary/60 flex flex-row peer-hover:w-fit! transition-all duration-300 ease-linear">
                        <Button className="rounded-full outline-none! border-0! bg-secondary-background/90! w-fit!" variant="outline">
                            <LazyIcon name="line-md:list" className="size-full aspect-square" />
                        </Button>
                        <Button className="rounded-full outline-none! border-0! bg-secondary-background/90! w-fit!" variant="outline">
                            <LazyIcon name="line-md:list" className="size-full aspect-square" />
                        </Button>
                        <Button className="rounded-full outline-none! border-0! bg-secondary-background/90! w-fit!" variant="outline">
                            <LazyIcon name="line-md:list" className="size-full aspect-square" />
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}