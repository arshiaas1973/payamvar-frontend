'use client';

import Input from "@/components/ui/custom/input";
import { Label } from "@/components/ui/label";
import { MuiTelInput } from "mui-tel-input";
import { useCallback } from "react";
import { create } from "zustand";

const useStore = create<{
    phone: string,
    setPhone: (phone: string) => void
}>((set) => ({
    phone: "",
    setPhone: (phone) => set({ phone }),
}))

export function PhoneLoginClient({
    onChange
}:{
    onChange?: (phone: string) => any,
}) {
    const { ...store } = useStore();
    const changePhoneNumber = useCallback((phone: string) => {
        if(phone.length>15)
            store.setPhone(phone.substring(0,16));
        else
            store.setPhone(phone);
        onChange?.(phone);
    }, [onChange]);
    return (
        <div className="flex flex-col py-3 w-full">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone" className="font-secondary font-medium text-base">Phone</Label>
                <MuiTelInput className="bg-zinc-800 border border-zinc-500/50! [&_input]:font-secondary! [&_input]:font-semibold!" value={store.phone} onChange={(phone) => changePhoneNumber(phone)} sx={{
                    background: "#2b2b2b",
                    border: "1px solid #71717b",
                    borderRadius: "12px",
                    '*:focus-visible': {
                        outline: "none",
                    },
                    '& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-2u11ia-MuiInputBase-input-MuiOutlinedInput-input': {
                        color: 'var(--foreground)'
                    },
                    '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedStart.css-4bojcr-MuiInputBase-root-MuiOutlinedInput-root': {
                        borderRadius: "12px",
                        paddingInlineStart: "14px",
                    },
                    '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedStart.css-4bojcr-MuiInputBase-root-MuiOutlinedInput-root:hover': {
                        borderColor: "#71717b !important",
                    },
                    '& img': {
                        borderRadius: "12px",
                    }
                }} />
            </div>
        </div>
    );
};