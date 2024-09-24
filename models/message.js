const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Message = mongoose.model('message', messageSchema);
module.exports= Message;