const express = require("express");
const router = express.Router();
const core = require('../core/index')

router.get("/test", (req, res) => {
    res.end("answer from test route");
});
router.get("/v1/user", (req, res) => {
    // res.end("v1 user");

    core.user.getProfile(req.user)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(err.status || 500).json(err))

});

module.exports = router;