const Diary = require('../models/diary');

module.exports = {
    create,
    delete: deleteOne,
    show,
    update
}

async function create (req, res) {
    let diary = await Diary.findById(req.user._id);
    diary.entries.push(req.body)  
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
    let  diary = await Diary.findOne({'entries._id': req.params.id});
    diary.entries.id(req.params.id).remove();
    diary.save(function(err){
        return res.json(diary);
    })
}

async function show (req, res) {
    let  diary = await Diary.findOne({'entries._id': req.params.id});
    let entry = diary.entries.id(req.params.id);
    return res.json(entry);
}

async function update (req, res) {
    let  diary = await Diary.findOne({'entries._id': req.params.id});
    let entry = await diary.entries.id(req.params.id);
    for (let key in req.body) {
        entry[key] = req.body[key];
    };
    try{
        await diary.save();
    } catch (err) {
        console.log(err);
    }
        return res.json(diary);
}