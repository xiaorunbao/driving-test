'use client';

import { Button, Result } from 'antd';
import { ERROR_PAGE_PROMPT_MSG } from '@/constant';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
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
      </body>
    </html>
  );
}
