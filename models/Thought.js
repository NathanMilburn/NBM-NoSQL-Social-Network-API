const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtsSchema = Schema(
    {
        thoguhtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // TODO: add getter method to format timestamp on query
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

thoughtsSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;