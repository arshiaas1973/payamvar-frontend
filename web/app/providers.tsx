'use client';

import { type Theme, Themes } from "@/types/default";
// import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [defaultTheme, setDefaultTheme] = useState<Theme>("dark");
  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDefaultTheme(isDarkMode ? "dark" : "light");
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setDefaultTheme(event.matches ? "dark" : "light");
    });
  }, []);
  useEffect(() => {
    console.log("Default theme set to:", defaultTheme);
  }, [defaultTheme]);
  return (
    <ThemeProvider defaultTheme={defaultTheme} attribute="class" themes={Themes}>
      {children}
    </ThemeProvider>
  )
}