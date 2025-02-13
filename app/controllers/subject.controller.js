// CREATE TABLE Subject
// (
//     ID char(20) PRIMARY KEY,
//     code nvarchar(50),
//     name nvarchar(100),
//     credit int,
//     status bit
// );
const e = require('express');
var { conn, sql } = require('../../connect');
var Subject = require('../models/subject.model');
var subject = new Subject();

exports.getAll = async function (req, res) {
    subject.getAll(function (err, data) {
        res.send({ result: data, error: err });
    });
}

exports.getByID = async function (req, res) {
    subject.getByID(req.params.id, function (err, data) {
        res.send({ result: data, error: err });
    });
}

exports.create = async function (req, res) {
    subject.create(req.body, function (err, data) {
        res.send({ result: data, error: err });
    });
}

exports.update = async function (req, res) {
    subject.update(req.body, function (err, data) {
        res.send({ result: data, error: err });
    });
}

exports.deleteByUpdate = async function (req, res) {
    subject.deleteByUpdate(req.params.id, function (err, data) {
        res.send({ result: data, error: err });
    });
}