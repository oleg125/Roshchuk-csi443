const express = require('express')
const routes = require('./routes/server')
const port = process.env.PORT || 3000;
const app = express()

app.use('/wwwroot', express.static(process.cwd() + '/wwwroot'))
app.set('view engine', 'ejs')

routes(app)

app.listen(port, () => console.log('Listening at port ' + port + '...'))