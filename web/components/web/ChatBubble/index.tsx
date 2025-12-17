'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chat } from "@/types/web";
import clsx from "clsx";

export function ChatBubble({ chat }: { chat: Chat }) {
    return (
        <div className={clsx(
                "flex gap-2",
                chat.sender === "incoming" && "flex-row",
                chat.sender === "outgoing" && "flex-row-reverse",
            )}>
            <Avatar className="w-10 h-10">
                <AvatarImage width={40} height={40} />
                <AvatarFallback>
                    <button className="cursor-pointer w-10 aspect-square rounded-full" type="button">
                        AE
                    </button>
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <h1 className={clsx(
                    "text-lg font-semibold",
                    chat.sender === "incoming" && "text-start",
                    chat.sender === "outgoing" && "text-end",
                )}>User</h1>
                <div className={clsx(
                    "py-2 px-4 rounded-[20px] w-fit",
                    chat.sender === "incoming" && "rounded-ss-none bg-incoming-bubble-bg",
                    chat.sender === "outgoing" && "rounded-se-none bg-outgoing-bubble-bg/50",
                )}>
                    jdakjdlsjdsl<br />ds
                </div>
            </div>
        </div>
    );
}