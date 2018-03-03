import React, { Component } from 'react';

import { Modal, Button, Input, Icon } from 'antd';
import { StyleSheet, css } from 'aphrodite';

class PlayerEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      username: ''
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.props.handleUserCreate(this.state.username);
    this.setState({
      visible: false,
      username: ''
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      username: ''
    });
  }
  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div>
        <Button type="primary" icon="plus-circle-o" onClick={this.showModal}>Add Player</Button>
        <Modal
          title="New Player"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            placeholder="Enter the Player name"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.username}
            onChange={this.onChangeUserName}
          />
        </Modal>
      </div>
    );
  }
}

const styles = StyleSheet.create({

});

export default PlayerEdit;