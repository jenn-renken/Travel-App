const router = require("express").Router();
const session = require("express-session");
const sequelize = require("../config/connection");
const { Post, User } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "id",
      "title",
      "location",
      "cost",
      "description",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      posts.forEach((p) => {
        console.log(p);
        if (req.session.loggedIn) {
          if (p.user.username === req.session.username) {
            p.isMine = true;
          }
        } else {
          p.isMine = false;
        }
      });
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "location",
      "cost",
      "description",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("edit-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login routes
router.get("/login", (req, res) => {

  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.post('/login', (req, res) => {
//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(dbUserData => {
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;

//       res.json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//       req.session.destroy(() => {
//           res.status(204).end();
//       });
//   } else {
//       res.status(404).end();
//   }
// });

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

module.exports = router;
