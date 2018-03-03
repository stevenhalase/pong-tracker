import React, { Component } from 'react';

import { message } from 'antd';

import './App.css';
import Dashboard from './components/Dashboard';

import DataService from './services/DataService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataService: new DataService(),
      Players: [],
      Games: []
    }
    this.handleUserCreate = this.handleUserCreate.bind(this);
    this.handleUserDelete = this.handleUserDelete.bind(this);
  }
  componentDidMount() {
    this.state.DataService.getPlayers()
      .then(players => {
        this.setState({ 
          Players: players 
        });
      })
  }
  handleUserCreate = (e) => {
    let _this = this;
    const hide = message.loading('Creating player..', 0);
    this.state.DataService.createPlayer(e)
      .then(player => {
        let newPlayersList = _this.state.Players;
        newPlayersList.push(player);
        _this.setState({
          Players: newPlayersList
        })
        hide();
        message.success('Player ' + player.Name + ' created successfully!');
      })
      .catch(error => {
        hide();
        message.error('Error creating player!');
      })
  }
  handleUserDelete = (e) => {
    let _this = this;
    const hide = message.loading('Deleting player..', 0);
    this.state.DataService.deletePlayer(e._id)
      .then(player => {
        let deletedPlayerIndex = _this.state.Players.findIndex(player => player._id === e._id);
        let newPlayersList = _this.state.Players;
        newPlayersList.splice(deletedPlayerIndex, 1);
        _this.setState({
          Players: newPlayersList
        })
        hide();
        message.success('Player ' + e.Name + ' deleted successfully!');
      })
      .catch(error => {
        hide();
        message.error('Error deleting player!');
      })
  }
  render() {
    return (
      <div className="App">
        <Dashboard 
          handleUserCreate={this.handleUserCreate}
          handleUserDelete={this.handleUserDelete}
          players={this.state.Players}/>
      </div>
    );
  }
}

export default App;
