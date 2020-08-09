// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }


const express = require("express");
// const mongoose = require('mongoose');
// const path = require('path');

// const PORT = process.env.PORT || 3030;
const app = express();

var PORT = process.env.PORT || 8080;

// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')

// const Habit = require('./models/HabitModel');
// const CatModel = require('./models/CatModel');
// const DayModel = require('./models/DayModel');
// const UsersModel = require('./models/UsersModel');

// mongoose.Promise = global.Promise;

// MONGO setup ===
// =============================================================
// IF NODE_ENV exists then setup for Heroku, if not just use local
// let MONGODB_URI = process.env.NODE_ENV
//     ? process.env.MONGODB_URI
//     : "mongodb://localhost/HabitNexus";
    // : "mongodb://<dbuser>:<dbpassword>@ds141490.mlab.com:41490/heroku_bwqsgrdb";

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// =============================================================


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));
// }

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )

// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))

// app.get('/', checkAuthenticated, (req, res) => {
//   // res.render('index.ejs', { name: req.user.name })
//   res.redirect('/index')
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   // res.render('login.ejs')
//   res.redirect('/login')
// })

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   // res.render('register.ejs')
//   res.redirect('/register')
// })

// app.post('/register', checkNotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword
//     })
//     res.redirect('/login')
//   } catch {
//     res.redirect('/register')
//   }
// })

// app.delete('/logout', (req, res) => {
//   req.logOut()
//   res.redirect('/login')
// })

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }

//   res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/')
//   }
//   next()
// }

// app.delete("/:id", (request, response) => {
//     const mongoID = request.params.id;
//     ToDo.remove({
//         _id: mongoID,
//     })
//         .then((data) => {
//             response.status(200).end();
//         })
//         .catch((error) => {
//             response.status(404).send(error.message);
//         });
// });

// app.post("/HabitNexus2", (request, response) => {
//     const HabitData = request.body;
//     console.log('is this working?', HabitData)
//     Habit.create(HabitData, function () {
//         response.status(200).end();
//     })
// });

// app.put('/api/updateScore/:id', function (req, res) {
//     console.log(`
//             put route /api/
            
//             req.body :${JSON.stringify(req.body)}
//             req.params: ${req.params.id}
//             `)
//     Habit.updateOne({ _id: req.params.id }, { score: req.body.score })
//         .then(data => {
//             res.json(data)
//         })

// })

// app.get('/api/sortedHabits', function (req, res) {
//     console.log(`
//             sorted get route /api/
            
//             req.body :${JSON.stringify(req.body)}
//             req.params: ${req.params.id}
//             `)

//     Habit.find({})
//         .then(data => {
//             res.json(data)
//             console.log('get sorted Habits: ', data)
//         })
//         .catch(function () {
//             response.status(404).end("Can not find and sort list!");
//         });

// });

// ****************** Define any API routes before this runs *****************************
// app.get("/HabitNexus2", (request, response) => {
//     Habit.find({})
//         .then(function (data) {
//             response.status(200).json(data);
//         })
//         .catch(function () {
//             response.status(404).end("404!! Information BLACK HOLE!!");
//         });
// });

// function sendIndex(request, response) {
//     const indexPath = path.join(__dirname, 'client', 'build', 'index.html');

//     response.sendFile(indexPath);
// }

// app
//     .get("/Form", sendIndex)
//     .get("/Habits", sendIndex)
//     .get("/Leaderboard", sendIndex)
//     .get("/Login", sendIndex);

//*************************************************************************************** */
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});