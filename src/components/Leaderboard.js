import React, { Component } from 'react';

import { Row, Col, Button, Table, Icon, Divider, Avatar } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const columns = [{
  title: 'Name',
  dataIndex: 'Name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}];

class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <Row>
          <Col span={24}>
            <Avatar icon="bars" />
            <h1 className={css(styles.title)}>Leaderboard</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={this.props.players} />
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
  }
});

export default Leaderboard;