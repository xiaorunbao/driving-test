import React from 'react';

import AntdProLayout from '../components/layout/pro-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AntdProLayout>{children}</AntdProLayout>;
}
