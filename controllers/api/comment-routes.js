const {Comment, User, Post} = require('../../models');
const router = require('express'). Router();


router.get('/', (req, res) => {
    Comment.findAll({}).
    then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.post('/', withAuth, (req, res) => {
    Comment.create({
        post_id: req.body.post_id,
        user_id:req.session.user_id
    }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({where: {id:req.params.id}})
}).then(dbCommentData => {
    res.status(404).json({
        message:'There was no comment found at this id'
    })
})

module.exports = router;