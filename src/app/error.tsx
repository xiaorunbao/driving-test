'use client';

// Error components must be Client Components
import { Button, Result } from 'antd';
import { ERROR_PAGE_PROMPT_MSG } from '@/constant';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Result
      status="500"
      title="500"
      subTitle={ERROR_PAGE_PROMPT_MSG}
      extra={
        <Button type="primary" onClick={() => reset()}>
          再试一次
        </Button>
      }
    />
  );
}
