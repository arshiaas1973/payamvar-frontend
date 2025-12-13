'use client';

import { ChatHeader } from "../ChatHeader";
import { ChatView } from "../ChatView";

export function ChatSection({ chat_id }: { chat_id: number }) {
    if (chat_id === -1) {
        return (
            <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
                No active chat selected.
            </div>
        );
    }
    return (
        <div className="flex flex-col h-full overflow-hidden divide-y-2 divide-(--border-color)">
            <div className="flex w-full h-21 overflow-hidden">
                <ChatHeader />
            </div>
            <div className="flex grow w-full overflow-y-auto">
                <ChatView />
            </div>
        </div>
    )
}