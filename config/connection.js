const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/NoSQLSocialNetworkDB',
    {
        useNewUrlParse: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;