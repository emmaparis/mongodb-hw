const {Schema} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: ()=> new Schema.Types.ObjectId
        },
        reactionBody : {
            type:String, 
            required: true, 
            maxlength: 280
        },
        username: {
            type: String, 
            required: true,
        },
        createdAt :{
            type: Date,
            default: Date.now,
            //getter method to format the timestamp on query?
        },
    },
    {
        toJSON:{
            virtuals: true, 
            getters: true,
        },
       id: false,
    },
)

module.exports = reactionSchema;