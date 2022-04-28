const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trimmed: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Email Match Regex
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

profileSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    });

const User = model('User', profileSchema);

module.exports = User;