import React from "react";
import LazyIcon from "@/components/ui/custom/lazyicon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuList } from "@/datas/web";
import { type MenuItem as ML } from "@/types/web";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-full h-screen flex py-1 pe-1.5">
            <div className="w-full h-full flex rounded-lg">
                <div className="w-23 h-full flex flex-col justify-between items-center bg-background px-1.5 py-4.5">
                    <Image src={"/assets/images/logo-cropped.webp"} width={48} height={48} alt="Logo" />
                    <RadioGroup className="flex flex-col gap-3 w-full items-center" defaultValue="main">
                        <div className="flex flex-col gap-3 w-6">
                            {
                                (MenuList as ML[]).map((item: ML,id: number) => (
                                    <label
                                        key={`${id}-${item.value}`}
                                        className='border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50'
                                    >
                                        <RadioGroupItem
                                            id={`${id}-${item.value}`}
                                            value={item.value}
                                            className='sr-only after:absolute after:inset-0'
                                            aria-label={item.label ?? ''}
                                            disabled={item.disabled ?? false}
                                        />
                                        <LazyIcon name={item.icon} />
                                    </label>
                                ))
                            }
                        </div>
                    </RadioGroup>
                    <div className="flex flex-col gap-4 w-full items-center">
                        hey
                    </div>
                </div>
                <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-row rounded-2xl">

                </div>
            </div>
        </div>
    );
};

export default Page;