
module.exports.index = (app) => app.get('/', (request, response) => response.render('pages/index', { title:'Profile OR'}))

module.exports.assignment3 = (app) => app.get('/assignment3', (request, response) => response.render('pages/assignment3', { title:'Assignment3' }))

module.exports.midterm_b4 = (app) => app.get('/midterm_b4', (request, response) => response.render('pages/midterm_b4', { title: 'Visit North Cascades National Park b4' }))

module.exports.midterm = (app) => app.get('/midterm', (request, response) => response.render('pages/midterm', { title: 'Visit North Cascades National Park' }))

module.exports.review = (app) => app.get('/review', (request, response) => response.render('pages/review', { title: 'My Review' }))

module.exports.webresources = (app) => app.get('/webresources', (request, response) => response.render('pages/webresources', { title: 'Responsive Design' }))

