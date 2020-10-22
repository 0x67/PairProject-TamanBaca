const express = require('express')
const router = require('./routers')
const app = express()
const port = 8877

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
   console.log(`Server started on http://localhost:${port}`);
})