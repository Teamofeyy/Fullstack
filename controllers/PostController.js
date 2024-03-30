import PostModel from '../models/post.js';

export const create = async (req,res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imgageUrl: req.body.imgageUrl,
            tags: req.body.tags,
            user: req.user.userId,
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать статью',
        });
    }
}