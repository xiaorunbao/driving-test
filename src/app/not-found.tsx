'use client';

import { Button, Result } from 'antd';
import { NOT_FOUND_PAGE_PROMPT_MSG } from '@/constant';

export default function NotFound() {
  return (
    <Result
      title="404"
      status="404"
      subTitle={NOT_FOUND_PAGE_PROMPT_MSG}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}
