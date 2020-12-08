const Diary = require('../models/diary');

module.exports = {
    create,
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