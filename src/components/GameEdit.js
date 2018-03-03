import React, { Component } from 'react';

import { Modal, Button, Input, InputNumber, Icon, DatePicker, AutoComplete, Row, Col  } from 'antd';
import { StyleSheet, css } from 'aphrodite';

class GameEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      newGame: {
        date: {},
        playerone: {},
        playeronescore: 21,
        playertwo: {},
        playertwoscore: 21
      },
      playerOneSource: this.props.players,
      playerTwoSource: this.props.players
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onPlayerOneChange = this.onPlayerOneChange.bind(this);
    this.onPlayerOneScoreChange = this.onPlayerOneScoreChange.bind(this);
    this.onPlayerTwoChange = this.onPlayerTwoChange.bind(this);
    this.onPlayerTwoScoreChange = this.onPlayerTwoScoreChange.bind(this);
    this.handlePlayerOneSearch = this.handlePlayerOneSearch.bind(this);
    this.handlePlayerTwoSearch = this.handlePlayerTwoSearch.bind(this);
    this.filterPlayers = this.filterPlayers.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.replacePlayers(this.state.newGame);
    this.props.handleGameCreate(this.state.newGame);
    this.setState({
      visible: false,
      newGame: {
        date: {},
        playerone: {},
        playeronescore: 21,
        playertwo: {},
        playertwoscore: 21
      },
      playerOneSource: this.props.players,
      playerTwoSource: this.props.players
    });
  }
  replacePlayers = (game) => {
    game.playerone = this.props.players.find(el => {
      return el.Name.toLowerCase() == game.playerone.toLowerCase();
    })
    game.playertwo = this.props.players.find(el => {
      return el.Name.toLowerCase() == game.playertwo.toLowerCase();
    })
    this.setState({
      newGame: game
    })
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      newGame: {
        date: {},
        playerone: {},
        playeronescore: 21,
        playertwo: {},
        playertwoscore: 21
      },
      playerOneSource: this.props.players,
      playerTwoSource: this.props.players
    });
  }
  onChangeDate = (date, dateString) => {
    var newGame = {...this.state.newGame}
    newGame.date = date._d;
    this.setState({newGame})
    console.log(date, dateString);
  }
  onPlayerOneChange = (e) => {
    var newGame = {...this.state.newGame}
    newGame.playerone = e;
    this.setState({newGame})
    console.log(e);
  }
  onPlayerOneScoreChange = (e) => {
    var newGame = {...this.state.newGame}
    newGame.playeronescore = e;
    this.setState({newGame})
    console.log(e);
  }
  onPlayerTwoChange = (e) => {
    var newGame = {...this.state.newGame}
    newGame.playertwo = e;
    this.setState({newGame})
    console.log(e);
  }
  onPlayerTwoScoreChange = (e) => {
    var newGame = {...this.state.newGame}
    newGame.playertwoscore = e;
    this.setState({newGame})
    console.log(e);
  }
  handlePlayerOneSearch = (value) => {
    this.setState({
      playerOneSource: !value ? [] : this.filterPlayers(value)
    });
  }
  handlePlayerTwoSearch = (value) => {
    this.setState({
      playerTwoSource: !value ? [] : this.filterPlayers(value)
    });
  }
  filterPlayers = (value) => {
    var playerNames = [];
    for (let player of this.props.players) {
      if (player.Name.toLowerCase().includes(value.toLowerCase())) {
        playerNames.push(player.Name)
      }
    }
    return playerNames;
  }
  render() {
    return (
      <div>
        <Button type="primary" icon="plus-circle-o" onClick={this.showModal}>Add Game</Button>
        <Modal
          title="New Game"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row className={css(styles.row)}>
            <Col span={24}>
              <DatePicker className={css(styles.fullWidth)} onChange={this.onChangeDate} />
            </Col>
          </Row>
          <Row className={css(styles.row)}>
            <Col span={17}>
              <AutoComplete
                className={css(styles.fullWidth)}
                dataSource={this.state.playerOneSource}
                style={{ width: 200 }}
                onSelect={this.onPlayerOneChange}
                onSearch={this.handlePlayerOneSearch}
                placeholder="Player One"
              />
            </Col>
            <Col span={6} offset={1}>
              <InputNumber 
                className={css(styles.fullWidth)} 
                min={0} max={100} defaultValue={21} 
                onChange={this.onPlayerOneScoreChange} />
            </Col>
          </Row>
          <Row className={css(styles.row)}>
            <Col span={17}>
              <AutoComplete
                className={css(styles.fullWidth)}
                dataSource={this.state.playerTwoSource}
                style={{ width: 200 }}
                onSelect={this.onPlayerTwoChange}
                onSearch={this.handlePlayerTwoSearch}
                placeholder="Player Two"
              />
            </Col>
            <Col span={6} offset={1}>
              <InputNumber 
                className={css(styles.fullWidth)}
                min={0} max={100} defaultValue={21} 
                onChange={this.onPlayerTwoScoreChange} />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginBottom: '10px'
  },
  fullWidth: {
    width: '100%'
  }
});

export default GameEdit;