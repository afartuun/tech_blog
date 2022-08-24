const router = requrie('express').Router();

const {Post, Comment, User} = require('../../models');

router.get('/', (req, res) => {
    User.findAll({})
});

router.post('/', (req, res) => {
    User.create({})
});

router.put('/', (req, res) => {
    User.update({})
});

router.delete('/:id', (req, res) => {
    User.destoru({})
});

module.exports = router;