'use client';

import React from "react";
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

const useStore = create<{
    selectedSidebarTab: number
    setSidebarTab: (tabId: number) => void,
}>((set) => ({
    selectedSidebarTab: 0,
    setSidebarTab: (tabId) => set({ selectedSidebarTab: tabId }),
}));

const Page = () => {
    const { ...store } = useStore();
    return (
        <div className="w-full h-screen flex py-1 pe-1.5">
            <div className="w-full h-full flex rounded-lg">
                <div className="w-23 h-full flex flex-col justify-between items-center bg-background px-1.5 py-4.5">
                    <Image src={"/assets/images/logo-cropped.webp"} width={48} height={48} alt="Logo"/>
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
                        <button className="overflow-hidden w-fit h-fit rounded-full">
                            <Image className="bg-purple-200" width={48} height={48} loading="lazy"/>
                        </button>
                    </div>
                </div>
                <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-row rounded-2xl">

                </div>
            </div>
        </div>
    );
};

export default Page;