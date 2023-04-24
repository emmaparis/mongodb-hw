const {Schema, model } = require('mongoose');
const { isEmail } =require('validator');

const userSchema = new Schema(
    {
        userId : {
            type: Schema.Types.ObjectId,
            default:()=>new Scehma.Types.ObjectId(),
        },
        username: {
            type: String,
            unique: true, 
            null: false,
            trim: true,
        },
        email: {
            type: String ,
            null: false, 
            unique: true,
            validate: [isEmail, 'invalid email']
        },
        thoughts: 
            [{
                type: Schema.Types.ObjectId,
                ref: 'thought',
              }],
        friends: 
            [{
                type: Schema.Types.ObjectId,
                ref: 'user',
            }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
      }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

//build model
const User = model('user', userSchema)

User.create(
    { username: 'ShannyaN', email: 'shannya658@gmail.com' },
  );
  
//export so it can be used
module.exports = User;