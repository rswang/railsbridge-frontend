var express = require('express');
var router = express.Router();
var Person = require('../model/person');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Express' });
});

router.post('/person', function(req, res) {
    console.log(req.body);
    console.log(Person);
    Person.create({
        name: req.body.name,
        age: req.body.age
    }, function(err, person) {
        console.log(err);
        console.log(person);
        res.status(200).send(person);
    });
});

router.get('/person', function(req, res) {
    Person.find({}, function(err, people) {
        res.status(200).send(people);
    });
});

module.exports = router;
