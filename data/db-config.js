const knex = require("knex");
require("dotenv").config();

const knexfile = require("../knexfile.js");

const environment = process.env.NODE_ENV;

module.exports = knex(knexfile[environment]);
