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
  alt,
  ...props
}: LazyIconProps & {
  alt?: string
}) {
  const [loaded, setLoaded] = useState(false);
  const [hitTimeout, setHitTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHitTimeout(true);
      setLoaded(true);
    }, 5000);
  }, []);

  return (
    <>
      {!loaded && (
        <Spinner
          className={clsx(className, "w-5 h-5")}
        />
      )}
      {!hitTimeout && (
        <Icon
          icon={name}
          className={clsx(className, !loaded && "hidden")}
          onLoad={() => {
            setLoaded(true)
          }}
          {...props}
        />
      )}

      {
        hitTimeout && alt && (
          <span className="text-xs font-bold" data-timeout="true">
            {alt}
          </span>
        )
      }

    </>
  );
}