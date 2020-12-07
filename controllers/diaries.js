const Diary = require('../models/diary');

module.exports = {
    create,  //should be create
    index
}

async function create (req, res) {
    let diary = await new Diary(req.body);
    diary.user = (req.user._id);
    diary.save(function(err){
        if(err) {
        console.log(err);
        return res.json({err});
        };
        return res.json(diary);
    })  
};

async function index (req,res) {
        let diary = await Diary.findById(req.user._id);
        return res.json(diary);
}