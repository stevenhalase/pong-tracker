import React, { Component } from 'react';

import { Row, Col, Button, Table, Icon, Divider, Avatar } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import GameEdit from './GameEdit';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: []
    };
    this.handleGameCreate = this.handleGameCreate.bind(this);
    this.columns = [{
      title: 'Date',
      dataIndex: 'Date',
      key: 'date',
      render: text => {
        let date = new Date(text).toLocaleString();
        return (
          <a href="#">{date}</a>
        )
      },
    }, {
      title: 'Player One',
      dataIndex: 'PlayerOne.Name',
      key: 'playerone',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Player One Score',
      dataIndex: 'PlayerOneScore',
      key: 'playeronescore'
    }, {
      title: 'Player Two',
      dataIndex: 'PlayerTwo.Name',
      render: text => <a href="#">{text}</a>,
      key: 'playertwo'
    }, {
      title: 'Player Two Score',
      dataIndex: 'PlayerTwoScore',
      key: 'playertwoscore',
    }];
    this.rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({ selectedRows: selectedRows });
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
  }
  handleGameCreate = (e) => {
    this.props.handleGameCreate(e);
  }
  render() {
    return (
      <div className="Games">
        <Row>
          <Col span={24}>
            <Avatar icon="calculator" />
            <h1 className={css(styles.title)}>Games</h1>
            <div className={css(styles.gameEdit)}>
              <GameEdit handleGameCreate={this.handleGameCreate} players={this.props.players}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.props.games} />
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    display: 'inline-block',
    marginBottom: '0',
    verticalAlign: 'middle',
    marginLeft: '10px'
  },
  gameEdit: {
    display: 'inline-block',
    marginBottom: '0',
    verticalAlign: 'middle',
    marginLeft: '10px',
    float: 'right'
  },
  active: {
    display: 'block'
  },
  inactive: {
    display: 'none'
  }
});

export default Games;