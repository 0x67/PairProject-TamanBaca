const express = require('express')
const router = require('./routers')
const app = express()
const session = require('express-session');
const port = 8080

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false,
   cookie: { 
      secure: false,
      sameSite: true
   }
}));

app.use('/', router)

app.listen(port, () => {
   console.log(`Server started on http://localhost:${port}`);
})