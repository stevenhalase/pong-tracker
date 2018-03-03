import React, { Component } from 'react';

import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import { StyleSheet, css } from 'aphrodite';

import Leaderboard from './Leaderboard';
import Players from './Players';
import Games from './Games';

import logo from'../assets/media/logo.png';

const { Header, Sider, Content } = Layout;
const Components = {
  Leaderboard: {
    Name: 'Leaderboard',
    Icon: '',
    ShowInNav: false
  },
  Players: {
    Name: 'Players',
    Icon: 'team',
    ShowInNav: true
  },
  Games: {
    Name: 'Games',
    Icon: 'calculator',
    ShowInNav: true
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedComponent: Components.Leaderboard
    };
    this.toggle = this.toggle.bind(this);
    this.menuSelect = this.menuSelect.bind(this);
    this.handleUserCreate = this.handleUserCreate.bind(this);
    this.handleUserDelete = this.handleUserDelete.bind(this);
    this.handleGameCreate = this.handleGameCreate.bind(this);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  menuSelect = (e) => {
    switch(e.key) {
      case 'dashboard':
        this.setState({
          selectedComponent: Components.Leaderboard,
        });
        break;
      case 'players':
        this.setState({
          selectedComponent: Components.Players,
        });
        break;
      case 'games':
        this.setState({
          selectedComponent: Components.Games,
        });
        break;
    }
  }
  handleUserCreate = (e) => {
    this.props.handleUserCreate(e);
  }
  handleUserDelete = (e) => {
    this.props.handleUserDelete(e);
  }
  handleGameCreate = (e) => {
    this.props.handleGameCreate(e);
  }
  render() {
    return (
      <div className="Dashboard">
        <Layout  className={css(styles.layout)}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={css(styles.logoContainer)}>
              <img 
                src={logo} 
                className={ this.state.collapsed ? css(styles.logoCollapsed) : css(styles.logo)}/>
              <h3 className={ this.state.collapsed ? css(styles.logoTextCollapsed) : css(styles.logoText)}>Pong Tracker</h3>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} onClick={this.menuSelect}>
              <Menu.Item key="dashboard">
                <Icon type="home" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="players">
                <Icon type="team" />
                <span>Players</span>
              </Menu.Item>
              <Menu.Item key="games">
                <Icon type="calculator" />
                <span>Games</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className={css(styles.header)}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content className={css(styles.content)}>
              <div className={this.state.selectedComponent === Components.Leaderboard ? css(styles.active) : css(styles.inactive)}>
                <Leaderboard players={this.props.players}/>
              </div>
              <div className={this.state.selectedComponent === Components.Players ? css(styles.active) : css(styles.inactive)}>
                <Players 
                  handleUserCreate={this.handleUserCreate} 
                  handleUserDelete={this.handleUserDelete}
                  players={this.props.players}/>
              </div>
              <div className={this.state.selectedComponent === Components.Games ? css(styles.active) : css(styles.inactive)}>
                <Games 
                  handleGameCreate={this.handleGameCreate}
                  players={this.props.players}
                  games={this.props.games}/>
              </div>
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
  layout: {
    height: '100vh'
  },
  logoContainer: {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px',
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    height: '34px',
    marginLeft: '10px'
  },
  logoCollapsed: {
    height: '34px'
  },
  logoText: {
    display: 'inline-block',
    color: '#FFF',
    lineHeight: '34px',
    marginLeft: '10px',
    marginBottom: '0',
    verticalAlign: 'middle',
    transition: 'opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    opacity: '1'
  },
  logoTextCollapsed: {
    maxWidth: '0',
    display: 'inline-block',
    opacity: '0'
  },
  active: {
    display: 'block'
  },
  inactive: {
    display: 'none'
  }
});

export default Dashboard;