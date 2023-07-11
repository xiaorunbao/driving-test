'use client';

import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

import 'antd/dist/reset.css';

import { useServerInsertedHTML } from 'next/navigation';

import 'styles/globals.css';

export default function StyleProviderLayout({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache());
  // 修改主题变量

  const render = (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'green',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== 'undefined') {
    return render;
  }

  return <StyleProvider cache={cache}>{render}</StyleProvider>;
}
