'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import themeConfig from '../../../../theme/theme-config';
import AntdProLayout from '../layout/pro-layout';

export default function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  // TODO 集成redux
  return (
    <ConfigProvider theme={themeConfig} locale={zhCN}>
      <>{children}</>
    </ConfigProvider>
  );
}
