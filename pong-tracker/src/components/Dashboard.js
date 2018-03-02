import React, { Component } from 'react';

import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import { StyleSheet, css } from 'aphrodite';

import Leaderboard from './Leaderboard';

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div class="Dashboard">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={css(styles.logo)} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span>Dashboard</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className={css(styles.header)}>
              <Row type="flex" justify="space-between">
                <Col span={2}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </Col>
                <Col span={2}>
                  <Button type="primary" icon="plus-circle-o">New Game</Button>
                </Col>
              </Row>
            </Header>
            <Content className={css(styles.content)}>
              <Leaderboard />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    background: '#fff', 
    paddingLeft: '16px'
  },
  content: {
    margin: '24px 16px', 
    padding: 24, 
    background: '#fff', 
    minHeight: 280
  },
  logo: {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px'
  }
});

export default Dashboard;