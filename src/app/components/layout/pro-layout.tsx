'use client';

import { useState } from 'react';
import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import Link from 'next/link';
import styled from 'styled-components';

import defaultProps from './_defaultProps';

/**
 * 公共导航栏
 */
export default function AntdProLayout({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState('/');

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <StyledProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '黄飞鸿',
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              console.warn('item', item);
              setPathname(item.path || '/welcome');
            }}
          >
            <Link href={item.path || '/'}>{dom}</Link>
          </div>
        )}
        layout="mix"
        navTheme="light"
        fixedHeader={true}
        fixSiderbar={true}
        collapsed={false}
      >
        <PageContainer>
          <StyledProCard>{children}</StyledProCard>
        </PageContainer>
      </StyledProLayout>
    </div>
  );
}

const StyledProCard = styled(ProCard)`
  height: 100vh;
`;

const StyledProLayout = styled(ProLayout)`
  .ant-pro-sider-collapsed-button {
    display: none;
  }
`;
