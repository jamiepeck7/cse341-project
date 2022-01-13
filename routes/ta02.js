//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ['Tyler', 'Dakota', 'Emma' ];
let errorMessage = "";

router.post('/addUser', (req, res, next) => {
  errorMessage = '';
  const newUser = req.body.newUser;
  
  userArray.push(newUser);

  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;
  
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    errorMessage = '';
    userArray.splice(index, 1);
  }
  else {
    errorMessage = "Users not found";
  }

  res.redirect('/ta02');
});



router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
