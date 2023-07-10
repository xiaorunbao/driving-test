"use client";

import { ReactNode, createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
}
