const mongoose = require('mongoose')

const ParfemSchema = mongoose.Schema({
    naziv: {
        type: String,
        required: true
    },
    kuca: {
        type:String,
        required: true
    },
    tip: {
        type:String,
        required: true,
        enum: ['zenski', 'muski', 'unisex'],
    }
})

const Parfem = mongoose.model('Parfem', ParfemSchema);

module.exports = Parfem;