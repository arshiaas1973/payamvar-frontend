'use client';

import { useEffect, useState } from "react";
import { Chat } from "@/types/web";
import { ChatViewClient } from "./client";
import { ChatViewLoading } from "./loading";

async function fetchChats(): Promise<Chat[]>{
    return await new Promise(resolve => setTimeout(() => resolve(
        [
            { sender: "incoming" as const }
        ]
    ), 2000))
}

export function ChatView() {
    const [chats, setChats] = useState<Chat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchChats().then(data => {
            setChats(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <ChatViewLoading />;
    }

    return <ChatViewClient chats={chats} />
}