'use client';

import UserExtraInfo from "@/components/login/UserExtraInfo";
import { DataType, ExtraDataType } from "@/lib/@types/login";
import useForm from "@/lib/useForm";
import { LoginUser, RegisterUser } from "@/lib/Users";
import { Icon } from "@iconify/react";
import { AnimatePresence } from "motion/react";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import React, { Component, lazy, Suspense, useCallback, useRef } from "react";
import { create } from "zustand";
import SHA512 from "crypto-js/sha512";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneLogin, EmailLogin } from "@/components/login";
import { Spinner } from "@/components/ui/spinner";
import { LoginEnum, LoginEnumType, LoginFormRenderer, LoginType } from "@/types/login";
import { Skeleton } from "@/components/ui/skeleton";
import LazyIcon from "@/components/ui/custom/lazyicon";

const useStore = create<{
    showExtraInfo: boolean,
    datas: DataType,
    showPassword: boolean,
    activeLoginType: LoginEnumType | null,
    renderLoginForm: () => React.ReactNode,
    setDatas: (datas: Object) => void,
    setExtraInfoStatus: (status: boolean) => void,
    togglePasswordVisibility: () => void,
    setRenderLoginForm: (node: React.ReactNode) => void,
    setActiveLoginType: (type: LoginEnumType) => void,
}>((set) => ({
    showExtraInfo: false,
    datas: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    },
    activeLoginType: null,
    renderLoginForm: () => undefined,
    showPassword: false,
    setDatas: (datas) => set((states) => ({ datas: Object.assign(states.datas, datas) })),
    setExtraInfoStatus: (status) => set({ showExtraInfo: !status }),
    togglePasswordVisibility: () => set((states) => ({ showPassword: !states.showPassword })),
    setRenderLoginForm: (node) => set({ renderLoginForm: () => node }),
    setActiveLoginType: (type) => set({ activeLoginType: type }),
}));

const Page = () => {
    const { ...store } = useStore();
    const SubmitButton = useRef<HTMLButtonElement>(null);
    const toast = useRef<Toast>(null);
    const Login = async () => {
        if (!store.showExtraInfo) {
            console.log(store.datas);
            if (store.datas.username.length <= 0 || store.datas.password.length <= 0) {
                toast.current?.show({ summary: "All field must be filled", severity: 'error', life: 3000 })
                return false;
            }
            try {
                // const  = getConfig();

                var data = await LoginUser(
                    useForm(Object.assign(store.datas, {
                        password: SHA512(store.datas.password).toString(CryptoJS.enc.Hex)
                    }))
                );
                // var { data } = await Axios.post(
                //     `/api/v1/login-user`,
                //     {
                //         username: UsernameInput.value,
                //         password: SHA256(PasswordInput.value).toString(CryptoJS.enc.Hex),
                //     });
                if (data.status == "success") {
                    if (data.result) {
                        const router = useRouter();
                        router.push("/");
                        return;
                    } else {
                        // Sign up
                        toast.current?.show({ summary: "Username or password is incorrect.", severity: 'error', life: 3000 })
                    }
                } else {
                    if (data.result == 100) {
                        useRouter().push("/")
                    } else if (data.result == 101) {
                        store.setExtraInfoStatus(true);
                    } else {
                        toast.current?.show({ summary: "Something went wrong: Unable to connect with server", severity: 'error', life: 3000 })
                    }
                }
            } catch (ex) {
                toast.current?.show({ summary: "Something went wrong: Unable to connect with server", severity: 'error', life: 3000 })
            }
        } else {
            if (store.datas.username.length <= 0 || store.datas.password.length <= 0
                || store.datas.firstName.length <= 0 || store.datas.lastName.length <= 0
                || store.datas.email.length <= 0 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(store.datas.email)
            ) {
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(store.datas.email)) {
                    toast.current?.show({ summary: "Email address isn't valid", severity: 'error', life: 3000 })
                } else {
                    toast.current?.show({ summary: "All field must be filled", severity: 'error', life: 3000 })
                }
                return false;
            }
            try {
                var data = await RegisterUser(
                    useForm(Object.assign(store.datas, {
                        password: SHA512(store.datas.password).toString(CryptoJS.enc.Hex)
                    }))
                );
                if (data.status == "success") {
                    if (data.result) {
                        useRouter().push("/")
                    } else {
                        store.setExtraInfoStatus(false);
                    }
                } else {
                    if (data.result == 100) {
                        useRouter().push("/")
                    } else {
                        toast.current?.show({ summary: "Something went wrong: Unable to connect with server", severity: 'error', life: 3000 })
                    }
                }
            } catch (ex) {
                toast.current?.show({ summary: "Something went wrong: Unable to connect with server", severity: 'error', life: 3000 })
            }
        }
    };
    return (
        <>
            <div className="bg-[#212121] text-white w-full min-h-screen flex flex-col items-center justify-center">
                <div
                    className="flex flex-col items-center gap-y-5 p-5 w-88 rounded-xl shadow-md  bg-transparent text-white shadow-[#11111128]">
                    <div className="flex flex-row gap-4 justify-center items-center w-fit">
                        <Image src={"/assets/images/logo-cropped.webp"} width={64} height={64} alt="" />
                        <h1 className="text-4xl font-(primary) font-bold uppercase text-shadow-[2px_3px_0_rgba(0,0,0,0.5)]">
                            <span className="text-[#0f85ed]">P</span>ayam<span className="text-[#9b64f4]">v</span>ar
                        </h1>
                    </div>
                    <Suspense fallback={<Spinner className="w-8 h-8" />}>
                        {
                            store.renderLoginForm()
                        }
                    </Suspense>
                    <div className="flex flex-col gap-2 w-full">
                        {
                            Object.keys(LoginEnum).map((key: string) => {
                                if (!(key as LoginType)) {
                                    return null;
                                }
                                key as LoginType;
                                let icon = lazy(() => require("@iconify/react").Icon({ icon: LoginEnum[(key as LoginType)].icon, className: "size-5 stroke-1 absolute left-0 top-1/2 -translate-y-1/2 ms-3" }));
                                return (
                                    <Suspense key={LoginEnum[(key as LoginType)].index} fallback={
                                        <Button className="flex flex-row items-center gap-3 w-fit h-fit bg-zinc-950 hover:bg-zinc-900 cursor-pointer border border-neutral-500/50 text-white text-lg px-5 py-2 justify-center w-full relative">
                                            <Spinner className="w-5 h-5" />
                                            <Skeleton className="h-4 w-50" />
                                            {/* <span className="font-secondary font-medium">{LoginEnum[(key as LoginType)].label}</span> */}
                                        </Button>
                                    }>
                                        <Button className="flex flex-row items-center gap-3 w-fit h-fit bg-zinc-950 hover:bg-zinc-900 cursor-pointer border border-neutral-500/50 text-white text-lg px-5 py-2 justify-center w-full relative" onClick={() => {
                                            if (store.activeLoginType !== LoginEnum[(key as LoginType)]) {
                                                store.setRenderLoginForm((LoginEnum[(key as LoginType)].form)?.());
                                                store.setActiveLoginType(LoginEnum[(key as LoginType)]);
                                                return;
                                            }
                                            // TODO: Login
                                        }}>
                                            <LazyIcon name={LoginEnum[(key as LoginType)].icon} className="size-5 stroke-1 absolute left-0 top-1/2 -translate-y-1/2 ms-3" />
                                            <span className="font-secondary font-medium">{LoginEnum[(key as LoginType)].label}</span>
                                        </Button>
                                    </Suspense>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Toast ref={toast} position="top-right" />
        </>
    );
};

export default Page;