const express = require('express')
const router = express.Router()
const ctrHome = require('../controllers/homeController')

module.exports = (app) => {
    ctrHome.index(app)
    ctrHome.assignment3(app)
    ctrHome.midterm_b4(app)
    ctrHome.midterm(app)
    ctrHome.review(app)
    ctrHome.webresources(app)
}

