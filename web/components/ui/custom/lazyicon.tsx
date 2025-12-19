"use client";
// LazyIcon.tsx
import { Icon, IconifyIcon, IconProps, loadIcons } from "@iconify/react";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner";
import clsx from "clsx";

export default function LazyIcon({ name, className, ...props }:
  Omit<IconProps, "className" | "icon" | "name"> & { className?: string, icon?: string, name: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadIcons([name], () => setReady(true));
  }, [name]);

  if (!ready) {
    return <Spinner className={clsx(
      className,
      "w-5 h-5",
    )} />; // placeholder
  }

  return <Icon className={className} {...props} icon={name} />;
}