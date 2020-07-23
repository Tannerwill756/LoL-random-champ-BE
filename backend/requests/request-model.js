const db = require("../data/db-config.js");

module.exports = {
    find,
    findTop,
    findJng,
    findMid,
    findAdc,
    findSup
}

function find() {
    return db.select('*').from('champions');
}

function findTop() {
    return db.select('*').from('champions').where('top', '>', '0')
}

function findJng() {
    return db.select('*').from('champions').where('jungle', '>', '0')
}

function findMid() {
    return db.select('*').from('champions').where('mid', '>', '0')
}

function findAdc() {
    return db.select('*').from('champions').where('adc', '>', '0')
}

function findSup() {
    return db.select('*').from('champions').where('support', '>', '0')
}