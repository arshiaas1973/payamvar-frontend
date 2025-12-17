'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Chat } from "@/types/web";
import { ChatBubble } from "../ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

export function ChatViewClient({ chats }: { chats: Array<Chat> }) {
    return (
        <div className="w-full h-full flex flex-col bg-(--chat-background) py-2 px-4">
            <ScrollArea className="w-full h-full">
                <div className="w-full h-full">
                    <ChatBubble chat={{sender: "incoming"}}/>
                    <ChatBubble chat={{sender: "outgoing"}}/>
                    <ChatBubble chat={{sender: "incoming"}}/>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="w-full h-fit flex-1 shrink-0 py-0.5 flex flex-row items-center relative">
                <Input className="w-full rounded-2xl h-12"/>
                <Button className="absolute end-2 top-1/2 -translate-y-1/2 h-8.5 bg-(--colored-secondary)/65 text-white rounded-lg">
                    <span>Send</span>
                </Button>
            </div>
        </div>
    )
}