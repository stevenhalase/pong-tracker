var GameModel = require('../models/GameModel.js');

/**
 * GameController.js
 *
 * @description :: Server-side logic for managing Games.
 */
module.exports = {

    /**
     * GameController.list()
     */
    list: function (req, res) {
        GameModel.find(function (err, Games) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game.',
                    error: err
                });
            }
            return res.json(Games);
        });
    },

    /**
     * GameController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        GameModel.findOne({_id: id}, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game.',
                    error: err
                });
            }
            if (!Game) {
                return res.status(404).json({
                    message: 'No such Game'
                });
            }
            return res.json(Game);
        });
    },

    /**
     * GameController.create()
     */
    create: function (req, res) {
        var Game = new GameModel({
          Date : req.body.date,
          PlayerOne : req.body.playerone,
          PlayerTwo : req.body.playertwo,
          PlayerOneScore : req.body.playeronescore,
          PlayerTwoScore : req.body.playertwoscore,
        });

        Game.save(function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Game',
                    error: err
                });
            }
            return res.status(201).json(Game);
        });
    },

    /**
     * GameController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        GameModel.findOne({_id: id}, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Game',
                    error: err
                });
            }
            if (!Game) {
                return res.status(404).json({
                    message: 'No such Game'
                });
            }

            Game.Date = req.body.date ? req.body.date : Game.Date;
            Game.PlayerOne = req.body.playerone ? req.body.playerone : Game.PlayerOne;
            Game.PlayerTwo = req.body.playertwo ? req.body.playertwo : Game.PlayerTwo;
            Game.PlayerOneScore = req.body.playeronescore ? req.body.playeronescore : Game.PlayerOneScore;
            Game.PlayerTwoScore = req.body.playertwoscore ? req.body.playertwoscore : Game.PlayerTwoScore;
			
            Game.save(function (err, Game) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Game.',
                        error: err
                    });
                }

                return res.json(Game);
            });
        });
    },

    /**
     * GameController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        GameModel.findByIdAndRemove(id, function (err, Game) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Game.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};