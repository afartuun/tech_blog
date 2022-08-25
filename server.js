const path = require('path');
const express = require('express');
const Sequezlize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const app = espress();

const PORT = process.env.PORT || 3000;

const SequezlizeStore = require('connect-session-sequelize')(session.Store);