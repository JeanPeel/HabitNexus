if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

// const htmlRoutes = require('./routes/html');
// const apiRoutes = require('../server/routes/api');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));
// app.get("/", (req, res) => {
//     response.sendfile(__dirname + "/public/home.html");
// });

// htmlRoutes.createRoutes(app);
// apiRoutes.createRoutes(app);


const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}


// app.get("/api/timeOfDay", function (req, res) {
//   res.json(timeOfDay);
// });

// app.get("/api/categories", function (req, res) {
//   res.json(categories);
// });

// app.post("/api/timeOfDay", function (req, res) {

//   res.json(timeOfDay);
// });

// app.post("/api/categories", function (req, res) { 

//   res.json(categories);

// });

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.js', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.js')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.js')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})



app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

app.listen(3000)

const listener = app.listen(process.env.PORT, () => {
  console.log("your app is listening on port " + listner.address().port);
});