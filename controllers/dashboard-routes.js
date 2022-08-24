const router = require('express').Router();

const {User, Post, Comment} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({})
});

router.get('/', (req, res) => {
    res.render({})
});

router.get ('/', (req, res) => {
    res.findAll({})
});

router.get ('/', (req, res) => {
    res.findOne({})
});

module.exports = router;

