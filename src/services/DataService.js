import axios from 'axios';

export default class DataService {
    constructor() {
        // this.ApiBase = 'http://localhost:3090/api/v1/';
        this.ApiBase = 'https://pong-tracker-api-dev.herokuapp.com/api/v1/';
        this.ApiRoutes = {
            Players: this.ApiBase + 'players/',
            Games: this.ApiBase + 'games/'
        }
    }

    getPlayers() {
        return new Promise((resolve, reject) => {
            axios.get(this.ApiRoutes.Players)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        })
    }

    createPlayer(name) {
        return new Promise((resolve, reject) => {
            axios.post(this.ApiRoutes.Players, { name: name })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        })
    }

    deletePlayer(id) {
        return new Promise((resolve, reject) => {
            axios.delete(this.ApiRoutes.Players + id)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        })
    }

}