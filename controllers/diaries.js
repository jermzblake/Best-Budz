const Diary = require('../models/diary');
const User = require('../models/user');

module.exports = {
    newDiary
}

async function newDiary (req, res) {
    let diary = await new Diary(req.body);
    diary.save(function(err){
        if(err) {
        console.log(err);
        return res.json({err});
        };
    })  
        const author = await User.findById(req.user._id);
        diary.user.push(author._id);
        diary.save(function(err){
            res.json(diary);
        });
};