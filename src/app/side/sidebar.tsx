"use client";

import { Button, ConfigProvider, Input } from "antd";
import { createContext, useContext, useState } from "react";

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

      {isOpen && (
        // 修改组件变量 (Component Token)
        <ConfigProvider
          theme={{ components: { Button: { colorPrimary: "red" } } }}
        >
          <Input.TextArea value={"测试testarea"} />
          <Button type="primary">按钮</Button>
        </ConfigProvider>
      )}
    </div>
  );
}
