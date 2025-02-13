var express = require('express');
var app = express();
app.use(express.json());
var sql = require("mssql/msnodesqlv8");

const { conn, sql } = require('./connect');
const port = process.env.PORT || 4000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('', function (req, res) {
    res.send('<a href="https://fu-exam-schedule.vercel.app/">FU Exam Schedule</a>');
});

require('./app/routes/student.route')(app);


//mở server tại port 4000
app.listen(4000, function () {
    console.log("Server is running at http://localhost:4000");
});
