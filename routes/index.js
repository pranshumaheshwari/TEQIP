var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEQIP' });
});

 router.get('/commitee' ,function(req,res){
   res.render('team',{title:'Commitee'});
 });
module.exports = router;
