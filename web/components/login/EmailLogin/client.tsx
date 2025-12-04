'use client';

import Input from "@/components/ui/custom/input";
import { Label } from "@/components/ui/label";

export function EmailLoginClient() {
    return (
        <div className="flex flex-col py-3 w-full">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="font-secondary font-medium text-base">Email</Label>
                <Input id="email" name="email" aria-label="Email" className="font-secondary rounded-lg font-medium"/>
            </div>
        </div>
    );
};