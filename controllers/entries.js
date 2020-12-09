// const { deleteOne } = require('../models/diary');
const Diary = require('../models/diary');

module.exports = {
    create,
    delete: deleteOne,
}

async function create (req, res) {
    let diary = await Diary.findById(req.user._id);
    diary.entries.push(req.body)  // initial thought is that form data will be sent in req.body 
    diary.save(function(err){
        if(err) {
        console.log(err);
        return res.json({err});
        };
        return res.json(diary);
    })  
}

async function deleteOne (req, res) {
    console.log(req.params.id)
    let  diary = await Diary.findOne({'entries._id': req.params.id})
    diary.entries.id(req.params.id).remove();
    diary.save(function(err){
        return res.json(diary);
    })
}