const router = require('express').Router();

const{User, Post, Comment} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({})
});

router.get('/login', (req, res) => {

});

router.get('/signup', (req, res) => {

});

router.get('/post/:id', (req, res) => {

});

module.exports = router;