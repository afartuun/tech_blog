const router = require('express').Router();

const{Post, Comment, User} = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({})
});

router.post('/', (req, res) => {
    Post.create({})

});

router.put('/', (req, res) => {
    Post.update({})

});

router.delete('/:id', (req, res) => {
    Post.destroy({})

});

module.exports = router; 


