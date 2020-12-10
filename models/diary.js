const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    date: {type: Date},
    strain: {type: String},
    type: {type: String},
    rating: {type: Number, min: 1, max:10},
    comments: {type: String},
    positiveEffects: [{type: Object}],
    negativeEffects: [{type: Object}],
    method: {type: String},
    flavours: [{type: Object}],
    onsetTime: {type: String}
},{
    timestamps: true
})

const diarySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    entries: [entrySchema] //embedding entry Schema
}, {
    timestamps: true
})

module.exports = mongoose.model('Diary', diarySchema);