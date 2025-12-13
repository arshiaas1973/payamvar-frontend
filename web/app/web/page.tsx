'use client';

import React, { useEffect } from "react";
import LazyIcon from "@/components/ui/custom/lazyicon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuList } from "@/datas/web";
import { type MenuItem as ML } from "@/types/web";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { create } from "zustand";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { ChatSection } from "@/components/web/ChatSection";

const useStore = create<{
    selectedSidebarTab: number,
    activeChat: number,
    setSidebarTab: (tabId: number) => void,
    setActiveChat: (chatId: number) => void,
}>((set) => ({
    selectedSidebarTab: 0,
    activeChat: -1,
    setSidebarTab: (tabId) => set({ selectedSidebarTab: tabId }),
    setActiveChat: (chatId) => set({ activeChat: chatId }),
}));

const Page = () => {
    const { ...store } = useStore();
    useEffect(()=>{
        if (store.selectedSidebarTab !== 0) {
            store.setActiveChat(-1);
        }
    },[store.selectedSidebarTab]);
    return (
        <div className="w-full h-screen flex py-1 pe-1.5">
            <div className="w-full h-full flex rounded-lg">
                <div className="w-23 h-full flex flex-col justify-between items-center bg-background px-1.5 py-4.5">
                    <Image src={"/assets/images/logo-cropped.webp"} width={48} height={48} alt="Logo" />
                    <div className="flex flex-col gap-1.5 w-fit p-1.5 rounded-full">
                        {
                            (MenuList as ML[]).map((item: ML, id: number) => (
                                <Button
                                    key={`${id}-${item.value}`}
                                    className={clsx('border-input relative flex flex-col items-center gap-3 rounded-full p-2! text-center shadow-xs transition-[color,box-shadow] outline-none has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50',
                                        store.selectedSidebarTab !== id && 'bg-inherit/85 hover:bg-gray-700/20 text-white/75',
                                        store.selectedSidebarTab === id && 'border-2 bg-gray-800 text-white/75 hover:bg-gray-800/50 hover:border-gray-100/50',

                                    )}
                                    onClick={(ev) => {
                                        store.setSidebarTab(id);
                                    }}
                                >
                                    {/* <RadioGroupItem
                                            id={`${id}-${item.value}`}
                                            value={item.value}
                                            className='sr-only after:absolute after:inset-0 after:left-0 z-5'
                                            aria-label={item.label ?? ''}
                                            disabled={item.disabled ?? false}
                                        /> */}
                                    <LazyIcon name={item.icon} className="size-4.5" />
                                </Button>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-4 w-full items-center">
                        <button className="overflow-hidden w-fit h-fit rounded-full" type="button" aria-label="profile-icon">
                            <Image className="bg-purple-200" width={48} height={48} loading="lazy" alt="@profile" />
                        </button>
                    </div>
                </div>
                <div className="w-full h-full bg-zinc-100 dark:bg-secondary-background flex flex-row rounded-2xl">
                    <ResizablePanelGroup direction="horizontal" className="w-full h-full overflow-hidden rounded-2xl">
                        <ResizablePanel defaultSize={20}>
                            <div className="w-full h-full flex flex-col divide-y-2 bg-tertiary-background divide-zinc-300 dark:divide-(--border-color)">
                                <div className="flex flex-row items-center justify-between px-5 py-4.5 h-21">
                                    <h1 className="text-2xl font-(primary) font-bold">
                                        Payamvar
                                    </h1>
                                    <div className="flex flex-row items-center gap-2">
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage width={40} height={40} />
                                            <AvatarFallback>
                                                <button className="cursor-pointer w-10 aspect-square rounded-full" type="button">
                                                    AE
                                                </button>
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-tertiary-background *:bg-item-background divide-y divide-(--border-color)">
                                    {
                                        [
                                            { chat_id: 1, name: "ArshiaE", latest_chat: {display_name: "ArshiaE", message:"Salam!"} },
                                            { chat_id: 0, name: "ArashH", latest_chat: {display_name: "ArashH", message:"Salam!"} },
                                        ].map((chat, index) => (
                                            <button className={clsx(
                                                "flex flex-row justify-start items-center h-20 gap-4 cursor-pointer transition-colors duration-200 ease-linear",
                                                chat.chat_id !== store.activeChat && "bg-item-background hover:bg-colored-primary/25",
                                                chat.chat_id === store.activeChat && "bg-colored-secondary/25! hover:bg-colored-primary/25!",
                                            )} type="button" onClick={() => {
                                                store.setActiveChat(chat.chat_id);
                                            }}>
                                                <div className="flex flex-row items-center ps-5 py-3.5 w-fit h-full">
                                                    <div className="flex items-center justify-center h-full aspect-square relative">
                                                        <Image className="bg-white rounded-tl-[90%] rounded-tr-[70%_100%] rounded-bl-[60%] rounded-br-[80%_50%]" src={""} fill={true} alt="@user-profile" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col w-full h-full aspect-square relative py-2">
                                                    <div className="flex flex-col text-start justify-center gap-0.5 w-full h-full">
                                                        <h2 className="line-clamp-1 text-(--primary-color) font-bold text-lg font-secondary">
                                                            { chat.name }
                                                        </h2>
                                                        <p className="line-clamp-1 text-(--secondary-color) font-medium font-secondary">
                                                            <span className="font-semibold">
                                                                {chat.latest_chat.display_name}:
                                                            </span>
                                                            {" "+chat.latest_chat.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))
                                    }

                                </div>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle color="var(--border-color)" />
                        <ResizablePanel defaultSize={80}>
                            {
                                {
                                    0: <ChatSection chat_id={store.activeChat}/>
                                }[store.selectedSidebarTab]
                            }
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
};

export default Page;