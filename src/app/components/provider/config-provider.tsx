'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import themeConfig from '../../../../theme/theme-config';
import StyledComponentsProvider from './styled-components-provider';

export default function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  // TODO 集成redux
  return (
    <ConfigProvider theme={themeConfig} locale={zhCN}>
      <StyledComponentsProvider>
        <>{children}</>
      </StyledComponentsProvider>
    </ConfigProvider>
  );
}
