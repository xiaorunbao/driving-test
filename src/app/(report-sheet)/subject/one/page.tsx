'use client';

import { Typography } from 'antd';
import { Metadata } from 'next';

export const metadata: Metadata = { title: '科目一' };

export default function page() {
  return (
    <div>
      <Typography.Title>科目一成绩单页面</Typography.Title>
    </div>
  );
}
