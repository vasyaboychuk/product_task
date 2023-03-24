const Comment = require('../dataBase/Comment');
module.exports = {
    createComment: async (req, res, next) => {
        try {
            const comment = await Comment.create(req.body)
            res.json(comment)
        } catch (e) {
            next(e);
        }

    },
    deleteComment: async (req, res, next) => {
        try {
            const {id} = req.params;
            await Comment.deleteOne({_id:id})
            res.json('deleted')
        } catch (e) {
            next(e);
        }

    },
    getComments: async (req, res, next) => {
        try {
            const comments = await Comment.find({})

            res.json(comments)
        } catch (e) {
            next(e);
        }

    },
    getOneById: async (req, res, next) => {
        try {


        } catch (e) {
            next(e);
        }

    }

}