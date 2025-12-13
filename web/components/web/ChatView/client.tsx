'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Chat } from "@/types/web";
import { ChatBubble } from "../ChatBubble";

export function ChatViewClient({ chats }: { chats: Array<Chat> }) {
    return (
        <div className="w-full h-full flex bg-(--chat-background) py-2 px-4">
            <ScrollArea className="w-full h-full">
                <div className="w-full h-full">
                    <ChatBubble chat={{sender: "incoming"}}/>
                    <ChatBubble chat={{sender: "outgoing"}}/>
                    <ChatBubble chat={{sender: "incoming"}}/>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}