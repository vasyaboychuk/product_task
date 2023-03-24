const router = require('express').Router();
const controller = require('../controller/comment.controller');

router.post('/',controller.createComment);
router.get('/',controller.getComments);
router.get('/:id',controller.getOneById);
router.delete('/:id',controller.deleteComment)

module.exports=router;