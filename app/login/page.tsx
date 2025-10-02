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
import React, { useRef } from "react";
import { create } from "zustand";
import SHA512 from "crypto-js/sha512";

const useStore = create<{
    showExtraInfo: boolean,
    datas: DataType,
    showPassword: boolean,
    setDatas: (datas: Object) => void,
    setExtraInfoStatus: (status: boolean) => void,
    togglePasswordVisibility: () => void
}>((set) => ({
    showExtraInfo: false,
    datas: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    },
    showPassword: false,
    setDatas: (datas) => set((states) => ({ datas: Object.assign(states.datas, datas) })),
    setExtraInfoStatus: (status) => set({ showExtraInfo: !status }),
    togglePasswordVisibility: () => set((states) => ({ showPassword: !states.showPassword })),
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
                    className="flex flex-col items-center gap-y-[20px] p-[20px] w-[400px] rounded-xl shadow-md  bg-[#181818] text-white shadow-[#11111128]">
                    <h1 className="font-oswald text-4xl mb-[30px]" tabIndex={-1}>
                        Welcome back
                    </h1>
                    {
                        store.showExtraInfo && (
                            <>
                                <UserExtraInfo firstName={store.datas.firstName} lastName={store.datas.lastName} email={store.datas.email}
                                    onChange={(dt: ExtraDataType) => {
                                        store.setDatas(dt);
                                    }} />
                            </>
                        )
                    }

                    <div className="flex flex-col gap-y-[10px] items-start w-full">
                        <h3 className="font-open-sans font-bold text-lg" tabIndex={-1}>
                            Username
                        </h3>
                        <input type="text" defaultValue={store.datas.username} maxLength={100}
                            className="w-full rounded-[6px] py-[4px] px-[6px] text-[18px] bg-[#2a2a2a] text-white ring-0 outline-0 outline-solid border-0 focus:outline-2 outline-[#6a6a6a] transition-all ease-in-out duration-200"
                            tabIndex={0}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                                store.setDatas({ username: ev.target.value })
                            }} />
                    </div>

                    <div className="flex flex-col gap-y-[10px] items-start w-full">
                        <h3 className="font-open-sans font-bold text-lg" tabIndex={-1}>
                            Password
                        </h3>
                        <div className="w-full inline-flex flex-row-reverse items-center ">
                            <input type={(store.showPassword) ? 'text' : 'password'} defaultValue={store.datas.password}
                                className="w-full rounded-[8px] py-[4px] px-[6px] pl-[45px] text-[18px] bg-[#2a2a2a] text-white ring-0 outline-0 outline-solid border-0 focus:outline-2 outline-[#6a6a6a] transition-all ease-in-out duration-200   [&:focus_~_button[icon-button]]:border-r-[#6a6a6a] [&:focus_~_button[icon-button]]:bg-[#6a6a6a]"
                                tabIndex={0} onKeyUp={(ev: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (ev.key.toLowerCase() == 'enter' && SubmitButton) {
                                        SubmitButton.current?.click();
                                    }
                                    store.setDatas({password: (ev.target as HTMLInputElement).value})
                                }} />
                            <button icon-button="true"
                                className="relative -mr-[37px] border-r-2 border-r-solid border-r-[#222] bg-[#222] px-[6px] py-[5.5px] rounded-[8px] flex flex-row items-center justify-center transition-colors ease-linear duration-200 cursor-pointer overflow-hidden w-[37.4px] h-[35px]"
                                onClick={() => {
                                    store.togglePasswordVisibility()
                                }} tabIndex={0}>
                                <AnimatePresence>
                                    {
                                        !store.showPassword &&
                                        <Icon className="absolute top-[5.5px] left-[6px]" icon="solar:lock-password-linear"
                                            fontSize={24} tabIndex={-1} />
                                    }

                                </AnimatePresence>
                                <AnimatePresence>
                                    {
                                        store.showPassword &&
                                        <Icon className="absolute top-[5.5px] left-[6px]" icon="solar:lock-password-unlocked-linear"
                                            fontSize={24} tabIndex={-1} />
                                    }
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>

                    <button tabIndex={0} ref={SubmitButton}
                        className="w-full cursor-pointer text-[16px] hover:bg-[#222] hover:text-[18px] text-white font-open-sans font-semibold flex flex-row items-center justify-center py-[6px] shadow-md shadow-[#33333322] bg-[#111] rounded-[6px] transition-[background-color_linear_0.2s,font-size_ease-in-out_0.2s]"
                        onClick={async () => await Login()}>
                        {
                            !store.showExtraInfo ?
                                (
                                    <span v-if="!ShowExtraInfo">
                                        Login
                                    </span>
                                )
                                :
                                (<span v-else>
                                    Sign up
                                </span>)
                        }
                    </button>
                </div>
            </div>
            <Toast ref={toast} position="top-right" />
        </>
    );
};

export default Page;