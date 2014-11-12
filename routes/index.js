var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Moxtra Meet'});
});

router.get('/meet', function (req, res) {
    res.render('meet', {title: 'Moxtra Meet'});
});

router.get('/join', function (req, res) {
    res.render('join', {title: 'Moxtra Meet'});
});

router.get('/plugin/:type?', function (req, res) {
    var model = {
        type: req.param('type'),
            id: req.query.id || '',
        firstName: req.query.firstName || '',
        lastName: req.query.lastName || '',
        pictureUrl: req.query.pictureUrl || '',
        meetingKey: req.query.meetingKey || ''
    };

    res.render('plugin', model);
});


module.exports = router;
