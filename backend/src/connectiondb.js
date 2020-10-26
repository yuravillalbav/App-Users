const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ;
//console.log(process.env.MONGODB_URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'Connection error:'));
database.once('open', () => {
    console.log('Connected database: ' + database.name)
});