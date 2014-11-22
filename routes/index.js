var express = require('express');
var router = express.Router();
var restClient = require('../utils/restClient.js');

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

router.get('/recording/:meetId', function (req, res) {
    var model = {
        meetId: req.param('meetId')
    };

    res.render('recording', model);
});

router.get('/rest/:meetId/:accessToken', function (req, res) {

    restClient.get('https://api.grouphour.com/meets/recordings/${meet_id}',
        {
            path: {meet_id: req.param('meetId')},
            parameters: {access_token: req.param('accessToken')},
            headers: {}
        },
        function (data) {
            res.json(data);
        }
    );

});


module.exports = router;
