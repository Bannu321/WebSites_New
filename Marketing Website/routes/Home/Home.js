const express = require("express");
const router = express.Router();

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// };
// router.use(timeLog);clear


router.use('/css', (req, res, next) => {
    const referer = req.get('Referer');
    // Allow requests from your own domain or no referer (for initial page load)
    if (referer && referer.includes('http://localhost:3000')) {
        next(); // Allow the request
    } else {
        res.status(403).send('Access to CSS files is restricted');
    }
});

router.use('/js', (req, res, next) => {
    const referer = req.get('Referer');
    if (referer && referer.includes('http://localhost:3000')) {
        next();
    } else {
        res.status(403).send('Access to JS files is restricted');
    }
});


// define the home page route
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
