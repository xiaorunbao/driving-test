import { ProCard, ProForm, ProFormText } from '@ant-design/pro-components';
import { Typography } from 'antd';
import Head from 'next/head';
import React from 'react';

export default function Pro() {
  return (
    <>
      <Head>
        <title>antd pro</title>
      </Head>
      <ProCard title="测试ProCard" size="small" extra="extra" tooltip="这是提示" style={{ maxWidth: 300 }}>
        <Typography.Text>卡片内容</Typography.Text>
        <ProForm>
          <ProFormText />
          11111111
        </ProForm>
      </ProCard>
    </>
  );
}
