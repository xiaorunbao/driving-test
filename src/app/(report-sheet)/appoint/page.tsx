'use client';

import { Typography } from 'antd';
import { Metadata } from 'next';

export const metadata: Metadata = { title: '预约考试' };

export default function page() {
  return (
    <div>
      <Typography.Title level={2}>预约考试页面</Typography.Title>
    </div>
  );
}
