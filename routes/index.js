var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEQIP' });
});

 router.get('/commitee', function(req,res){
   res.render('commitee',{title:'Commitee'});
 });

 router.get('/quality-circle', function(req,res){
   res.render('quality_circle',{title: 'Quality Circle'});
 });

 router.get('/reports', function(req,res){
   res.render('reports',{title: 'Reports'});
 });

 router.get('/events', function(req,res){
   res.render('events',{title: 'Events'});
 });

 router.get('/staff', function(req,res){
   res.render('staff',{title: 'Staff'});
 });

 router.get('/contact', function(req,res){
   res.render('contact',{title: 'Contact'});
 });

 router.get('/gallery', function(req,res){
   res.render('gallery',{title: 'Gallery'});
 });

module.exports = router;
