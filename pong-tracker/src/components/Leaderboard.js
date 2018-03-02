import React, { Component } from 'react';

import { Row, Col, Button, Table, Icon, Divider } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Wins',
  dataIndex: 'wins',
  key: 'wins',
}, {
  title: 'Losses',
  dataIndex: 'losses',
  key: 'losses',
}, {
  title: 'Win %',
  dataIndex: 'winpercent',
  key: 'winpercent',
}];

const data = [{
  key: '1',
  name: 'Steve',
  wins: 12,
  losses: 24,
  winpercent: ((12/24)*100).toFixed(2) + "%"
}, {
  key: '2',
  name: 'Pat',
  wins: 30,
  losses: 24,
  winpercent: ((30/24)*100).toFixed(2) + "%"
},{
  key: '3',
  name: 'Craig',
  wins: 12,
  losses: 45,
  winpercent: ((12/45)*100).toFixed(2) + "%"
}];

class Leaderboard extends Component {
  render() {
    return (
      <div class="Leaderboard">
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  // header: {
  //   background: '#fff', 
  //   paddingLeft: '16px'
  // },
});

export default Leaderboard;