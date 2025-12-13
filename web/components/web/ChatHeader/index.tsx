'use client';

import { useEffect, useState } from "react";
import { ChatHeaderClient } from "./client";
import { ChatHeaderLoading } from "./loading";

async function fetchUserInfo() {
    return await new Promise((resolve) => setTimeout(() => resolve([]), 1000));
}

export function ChatHeader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserInfo().then(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <ChatHeaderLoading />;
    }

    return <ChatHeaderClient />;
}