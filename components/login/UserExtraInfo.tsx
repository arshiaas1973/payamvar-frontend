'use client';
import { ExtraDataType } from "@/lib/@types/login";
import React, { useEffect } from "react"
import { create } from "zustand"

const useStore = create<{
    datas: ExtraDataType,
    setDatas: (d: ExtraDataType) => void,
}>((set) => ({
    datas: {
        firstName: "",
        lastName: "",
        email: "",
    },
    setDatas: (d) => set({ datas: d }),
}))
export default function UserExtraInfo({
    firstName = "",
    lastName = "",
    email = "",
    onChange = () => { }
}: {
    firstName: string,
    lastName: string,
    email: string,
    onChange: (values: ExtraDataType) => void | any
}) {
    const { ...store } = useStore();
    useEffect(() => {
        store.setDatas({
            firstName: firstName,
            lastName: lastName,
            email: email,
        });
    }, []);
    useEffect(() => {
        onChange(store.datas);
    }, [store.datas]);
    return (
        <>
            <div className="flex flex-col gap-y-[10px] items-start w-full">
                <h3 className="font-open-sans font-bold text-lg" tabIndex={-1}>
                    Firstname
                </h3>
                <input type="text" maxLength={60} tabIndex={0}
                    className="w-full rounded-[6px] py-[4px] px-[6px] text-[18px] bg-[#2a2a2a] text-white ring-0 outline-0 outline-solid border-0 focus:outline-2 outline-[#6a6a6a] transition-all ease-in-out duration-200" defaultValue={store.datas.firstName}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        let news: ExtraDataType = store.datas;
                        news.firstName = (ev.target! as HTMLInputElement).value;
                        store.setDatas(news);
                        onChange(news);
                    }} />
            </div >
            <div className="flex flex-col gap-y-[10px] items-start w-full">
                <h3 className="font-open-sans font-bold text-lg" tabIndex={-1}>
                    Lastname
                </h3>
                <input type="text" maxLength={60} tabIndex={0}
                    className="w-full rounded-[6px] py-[4px] px-[6px] text-[18px] bg-[#2a2a2a] text-white ring-0 outline-0 outline-solid border-0 focus:outline-2 outline-[#6a6a6a] transition-all ease-in-out duration-200" defaultValue={store.datas.lastName}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        let news: ExtraDataType = store.datas;
                        news.lastName = (ev.target! as HTMLInputElement).value;
                        store.setDatas(news);
                        onChange(news);
                    }} />
            </div >
            <div className="flex flex-col gap-y-[10px] items-start w-full">
                <h3 className="font-open-sans font-bold text-lg" tabIndex={-1}>
                    Email
                </h3>
                <input type="email" tabIndex={0}
                    className="w-full rounded-[6px] py-[4px] px-[6px] text-[18px] bg-[#2a2a2a] text-white ring-0 outline-0 outline-solid border-0 focus:outline-2 outline-[#6a6a6a] transition-all ease-in-out duration-200" defaultValue={store.datas.email}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        let news: ExtraDataType = store.datas;
                        news.email = (ev.target! as HTMLInputElement).value;
                        store.setDatas(news);
                        onChange(news);
                    }} />
            </div >
        </>
    );
}