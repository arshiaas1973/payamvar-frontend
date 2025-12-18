'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Chat } from "@/types/web";
import { ChatBubble } from "../ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LazyIcon from "@/components/ui/custom/lazyicon"

export function ChatViewClient({ chats }: { chats: Array<Chat> }) {
    return (
        <div className="w-full h-full flex flex-col bg-(--chat-background) py-2 px-4">
            <ScrollArea className="w-full h-full">
                <div className="w-full h-full">
                    <ChatBubble chat={{ sender: "incoming" }} />
                    <ChatBubble chat={{ sender: "outgoing" }} />
                    <ChatBubble chat={{ sender: "incoming" }} />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="w-full h-fit flex-1 shrink-0 py-0.5 flex flex-row items-center relative">
                <Input className="w-full rounded-2xl h-12 text-lg font-tertiary ps-11 pe-34" />
                <Button className="absolute start-1 top-1/2 -translate-y-1/2 h-8.5 bg-transparent text-white/50 hover:bg-transparent! hover:text-white/75 rounded-lg cursor-pointer transition-colors ease-linear duration-250 px-0! mx-1.5">
                    <LazyIcon name="line-md:emoji-smile-wink" className="size-7 **:stroke-[1.5]!" />
                </Button>
                <div className="absolute end-2 top-1/2 -translate-y-1/2 flex flex-row gap-1.5 h-fit w-fit items-center">
                    <Button className="h-fit bg-transparent text-white/50 hover:bg-transparent! hover:text-white/75 rounded-lg cursor-pointer transition-colors ease-linear duration-250 p-0! rounded-full">
                        <LazyIcon name="line-md:file-document-plus" className="size-7 **:stroke-[1.5]!" />
                    </Button>
                    <Button className="h-8.5 bg-(--colored-secondary)/65 hover:bg-(--colored-secondary)/50 text-white rounded-lg cursor-pointer transition-colors ease-linear duration-250">
                        <span className="font-medium font-tertiary text-base">Send</span>
                        <LazyIcon name="bxs:send" className="size-5" />
                    </Button>
                </div>

            </div>
        </div>
    )
}