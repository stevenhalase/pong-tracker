import React, { Component } from 'react';

import { Row, Col, Button, Table, Icon, Divider, Avatar } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import PlayerEdit from './PlayerEdit';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPlayer: false,
      selectedRows: []
    };
    this.handleUserCreate = this.handleUserCreate.bind(this);
    this.handleUserDelete = this.handleUserDelete.bind(this);
    this.columns = [{
      title: 'Name',
      dataIndex: 'Name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
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
  handleUserCreate = (e) => {
    this.props.handleUserCreate(e);
  }
  handleUserDelete = (e) => {
    this.props.handleUserDelete(this.state.selectedRows[0]);
  }
  render() {
    return (
      <div className="Players">
        <Row>
          <Col span={24}>
            <Avatar icon="team" />
            <h1 className={css(styles.title)}>Players</h1>
            <div className={css(styles.playerEdit)}>
              <PlayerEdit handleUserCreate={this.handleUserCreate}/>
            </div>
            <div className={css(styles.playerEdit)}>
              <Button 
                onClick={this.handleUserDelete}
                className={this.state.selectedRows.length === 1 ? css(styles.active) : css(styles.inactive)}
                type="danger" icon="user-delete" onClick={this.handleUserDelete} >Delete Player</Button>
            </div>
            <div className={css(styles.playerEdit)}>
              <Button 
                className={this.state.selectedRows.length > 1 ? css(styles.active) : css(styles.inactive)}
                type="danger" icon="user-delete">Delete Players</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.props.players} />
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
  playerEdit: {
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

export default Players;