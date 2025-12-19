'use client';

import { useEffect, useState } from "react";
import ChatProfileLoading from "./loading";
import ChatProfileClient from "./client";

async function fetchUserInfo() {
    return await new Promise((resolve) => setTimeout(() => resolve([]), 1000));
}


export default function ChatProfile() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserInfo().then(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <ChatProfileLoading />;
    }

    return <ChatProfileClient />;
}