"use client";

import { Icon, IconProps } from "@iconify/react";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner";
import clsx from "clsx";

type LazyIconProps = Omit<IconProps, "icon"> & {
  name: string;
  className?: string;
};

export default function LazyIcon({
  name,
  className,
  ...props
}: LazyIconProps) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <>
      {!loaded && (
        <Spinner
          className={clsx(className, "w-5 h-5")}
        />
      )}

      <Icon
        icon={name}
        className={clsx(className, !loaded && "hidden")}
        onLoad={() => {
          setLoaded(true)
        }}
        {...props}
      />
    </>
  );
}