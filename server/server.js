const app  = require('express')()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/User');
const creds = require('./keys.json');

app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())
app.use(passport.initialize())
app.use(passport.session())

passport.use(new FacebookStrategy({
    clientID: creds.facebookId,
    clientSecret: creds.facebookSecret,
    callbackURL: 'http://localhost:8080/api/auth/facebook/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ id: profile.id }, (err, user) => {
      if (err) console.log(err)
      if (!err && user !== null) done(null, user)
      else {
        user = new User({
          id: profile.id,
          username: profile.displayName
        })
        user.save(err => {
          if(err) console.log(err)
          else done(null, user)
        })
      }
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, done)
})

app.get('/api/auth/facebook', passport.authenticate('facebook'))

app.get('/api/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/')
  }
)

app.listen(3000, () => {
  console.log('Server listening on port 3000...')
})