import React from "react";
import { PhoneLogin } from "@/components/login";
import { EmailLogin } from "@/components/login";


export const LoginEnum: {
    [x in LoginType]: LoginEnumType
} = {
    PHONE_NUMBER: { index: 0, icon: "line-md:email", label: "Login with Phone", form: PhoneLogin },
    EMAIL: { index: 1, icon: "line-md:phone", label: "Login with Email", form: EmailLogin },
    GOOGLE: { index: 2, icon: "uil:google", label: "Login with Google" },
    YAHOO: { index: 3, icon: "mdi:yahoo", label: "Login with Yahoo" },
    X: { index: 4, icon: "line-md:twitter-x", label: "Login with X" },
};
export type LoginFormRenderer = {
    [x in LoginType]: () => Promise<React.JSX.Element>
};


export type LoginEnumType = {
    icon: string,
    label: string,
    index: number,
    form?: () => Promise<React.JSX.Element>,
};
export type LoginType = "PHONE_NUMBER" | "EMAIL" | "GOOGLE" | "YAHOO" | "X";