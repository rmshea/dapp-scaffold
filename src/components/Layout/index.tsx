import React from 'react';
import './../../App.less';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  return (
    <div className="App wormhole-bg">
      <Layout
        title={LABELS.APP_TITLE}
      >
        <Header className="App-Bar">
          <div className="app-title"><h2>Solana DAPP</h2></div>
          <AppBar />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {props.children}
        </Content>
      </Layout>
    </div>
  );
});
