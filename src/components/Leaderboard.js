import React, { Component } from 'react';

import { Row, Col, Button, Table, Icon, Divider, Avatar } from 'antd';
import { StyleSheet, css } from 'aphrodite';

import { Chart } from 'react-google-charts';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      dataArray: [['Name', 'Wins', 'Losses', 'Ratio']]
    }
    this.calculateStats = this.calculateStats.bind(this);
    this.createDataArray = this.createDataArray.bind(this);
  }
  calculateStats = () => {
    for (let player of this.props.players) {
      let wins = 0;
      let losses = 0;
      for (let game of this.props.games) {
        if (game.PlayerOne._id === player._id) {
          game.PlayerOneScore > game.PlayerTwoScore ? wins++ : losses++;
        }
        if (game.PlayerTwo._id === player._id) {
          game.PlayerTwoScore > game.PlayerOneScore ? wins++ : losses++;
        }
      }
      let wlRatio = losses > 0 ? wins/losses : wins;
      this.state.playerStats.push({
        Name: player.Name,
        Wins: wins,
        Losses: losses,
        WinPercent: wlRatio
      })
    }
  }
  createDataArray = () => {
    for (let playerStat of this.state.playerStats) {
      this.state.dataArray.push([playerStat.Name, playerStat.Wins, playerStat.Losses, playerStat.WinPercent])
    }
  }
  render() {
    if (this.props.players.length > 0 && this.props.games.length > 0) {
      this.calculateStats();
      this.createDataArray();
      return (
        <div className="Leaderboard">
          <Chart
            chartType="ColumnChart"
            data={this.state.dataArray}
            options={{}}
            graph_id="PlayerChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      );
    } else {
      return (
        <div className="Leaderboard">
          Loading...
        </div>
      );
    }
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