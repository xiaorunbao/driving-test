"use client";

import { createContext, useContext, useState } from "react";
import { Button } from "antd";

// @ts-ignore
const SidebarContext = createContext();

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen }: any = useContext(SidebarContext);

  return (
    <div>
      <p>Home</p>

      {isOpen && <Button type="primary">按钮</Button>}
    </div>
  );
}
