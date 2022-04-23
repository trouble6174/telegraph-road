require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');


var app = express();


const mongoose = require("mongoose")
const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL, {
    auth: {
        username: 'lc',
        password: '123123'
    },
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/tasks'));
app.use('/api', require('./routes/projects'));
app.use('/api', require('./routes/events'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))